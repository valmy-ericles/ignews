import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export default function SignInButton() {
  const isUserLogedIn = true
  
  return isUserLogedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361"/>
      Sign in with Github
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417"/>
      Sign in with Github  
    </button>
  )
}