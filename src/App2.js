import React from 'react';
import './index.css';

class App extends React.Component {

  state = {
      posts: [
        {
          id: 1,
          title: 'O título 1',
          body: 'Corpo 1' 
        },
        {
          id: 2,
          title: 'O título 2',
          body: 'Corpo 2' 
          },
        {
          id: 3,
          title: 'O título 3',
          body: 'Corpo 3' 
          },
    ]    
  };

  render() {
    const {posts} = this.state;
    return (
     
      <div className='App'>
        {posts.map(posts => (
          <div key={posts.id}>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

//Quando renderizamos os títulos de post, devemos informar como um elemento único,
//dessa maneira vamos informar o atributo key dentro de h1
//Quando aplicamos um parênteses no retorno do método map, indicamos que o elemento
//retornado vai ter mais de uma linha

export default App;