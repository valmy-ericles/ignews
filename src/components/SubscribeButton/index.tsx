import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { useRouter } from 'next/router';

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscription() {
    if(!session) {
      signIn('github');
      return;
    }

    if(session?.userActiveSubscription) {
      router.push('/posts');
      return
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch(err) {
      alert(err.message)
    }
  }

  return (
    <button 
      type="button"
       className={styles.subscribeButton}
       onClick={handleSubscription}
    >
      Subscribe now
    </button>
  )
}