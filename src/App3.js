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
    ],
    counter: 0    
  };

  componentDidMount() { 
    this.handleTimeout();
  }

  componentDidUpdate() {
    if (this.state.counter <= 10) //Condição de parada após certas atualizações do counter
    //Sem isso haverá um loop infinito
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  } //Limpeza de todo lixo concentrado no componente após a o seu desuso

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O título mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter:  counter + 1})
    }, 1000);
  }

  render() {
    const {posts, counter} = this.state;
    return (
     
      <div className='App'>
        <h1>{counter}</h1>
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

/*
Life Cicle Methods

componentDidMount() => É invocado imediatamente após um componente ser montado (inserido na árvore). 
Inicializações que exijam nós do DOM devem vir aqui. 
Se precisar carregar data de um endpoint remoto, este é um bom lugar para instanciar sua requisição.

componentDidUpdate() => é invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.
Você pode chamar setState() imediatamente dentro do componentDidUpdate() 
mas perceba que isto deve estar encapsulado em uma condição como no exemplo acima, ou você irá causar um loop infinito.

componentWillUnmount() => é invocado imediatamente antes que um componente seja desmontado e destruído. 
Qualquer limpeza necessária deve ser realizada neste método, como invalidar timers, cancelar requisições de rede, ou limpar qualquer subscrição que foi criada no componentDidMount().
Não se deve chamar setState() em componentWillUnmount() porque o componente nunca irá será renderizado novamente. Uma vez que a instância do componente foi desmontada, ela nunca será montada de novo.
*/

export default App;