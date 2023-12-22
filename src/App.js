import './index.css';
import { Component } from 'react'; 

class App extends Component {
  /*constructor(props) {
    super(props); //Chama o constructor de Component e recebe props

    this.handleH1Click = this.handleH1Click.bind(this);

    this.*/
    
    state = { //Estado - objeto que contém os dados de um componente

      name: 'Hedy Lamarr',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
      counter: 0

    };
  

  handleH1Click = () =>  { //Caso eu queria usar template strings, eu tenho declarar o bind de estado
    //const { name } = this.state;
    //alert(`Meu nome é ${name} na verdade !!`)
    //Quando eu clicar no H1 eu quero mudar o nome para outro
    //Não posso mudar o this.state
    //Tenho que fazer o seguinte

    this.setState({
      name : "Lucas Zanini"
    })
    const { name } = this.setState;
    alert(`Meu nome é ${name} na verdade !!`)

  }

  handleImgClick = () => { //Arrows functions não possuem 'this'. Porém refereciam o elemento pai, que é uma classe neste caso
      const { counter } = this.state;
      this.setState({
        counter : counter + 1
      })
  }

  handleButtonClick = (event) => { //Posso declarar um evento dentro da minha função
    event.preventDefault(); //Esse comando me permite evitar a execução padrão de um elemento HTML, como um link
    //que abre outra página web
    const { counter } = this.state;
    this.setState({
      counter: 0
    })
     
   }

  render() {
    /* Sem desestruturação
    const name = this.state.name;
    const imageUrl = this.state.imageUrl;
    const imageSize = this.state.imageSize;
    */
   //Com desestruturação -> mais comum
   const { name, imageSize, imageUrl, counter } = this.state;
    return (
      <>
      <h1 onClick={this.handleH1Click}>{name}</h1>
      <img
        onClick={this.handleImgClick}
        className="avatar"
        src={imageUrl}
        alt={'Photo of ' + name}
        style={{
          width: imageUrl,
          height: imageSize
        }}
      />
      <div>Contador de Clicks: {counter}</div>
      <button onClick={this.handleButtonClick}
      className='Botton'
      >Resetar clicks</button>
    </>
    )
  }
}

export default App;