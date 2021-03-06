import MyComponent from '../../../../slices/Document';

export default {
  title: 'slices/Document'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"document","items":[{"teste":[{"type":"paragraph","text":"Sunt excepteur aliquip do adipisicing non cillum reprehenderit aute officia exercitation veniam ea. Nostrud nisi quis deserunt pariatur eu elit ipsum consequat pariatur elit est labore anim.","spans":[]}]},{"teste":[{"type":"paragraph","text":"Excepteur magna anim incididunt. Officia do aute eiusmod officia amet.","spans":[]}]},{"teste":[{"type":"paragraph","text":"Ea tempor aliqua irure laboris dolore quis sint sunt exercitation.","spans":[]}]},{"teste":[{"type":"paragraph","text":"Amet tempor reprehenderit culpa dolor officia sint nostrud tempor exercitation.","spans":[]}]},{"teste":[{"type":"paragraph","text":"Ullamco aliqua elit et officia ipsum aute ad irure et do commodo.","spans":[]}]},{"teste":[{"type":"paragraph","text":"Commodo do Lorem nisi.","spans":[]}]}],"primary":{},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Teste = () => <MyComponent slice={{"variation":"teste","name":"teste","slice_type":"document","items":[{"teste":[{"type":"paragraph","text":"Esse amet est laborum nulla consequat cillum ut est dolore dolor ut qui aute. Aliqua sit dolor officia cupidatat nulla eu deserunt mollit est et ea nulla irure aute cillum.","spans":[]}]},{"teste":[{"type":"paragraph","text":"Ipsum in adipisicing est aliquip. Nulla nisi ad commodo labore tempor.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Drive mission-critical models","spans":[]}],"description":[{"type":"paragraph","text":"Consectetur in labore tempor sint occaecat cillum voluptate aute nostrud duis adipisicing magna.","spans":[]}]},"id":"_Teste"}} />
_Teste.storyName = 'teste'
