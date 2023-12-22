import React from 'react';

import './style.css';

import { loadPosts } from '../../utils/loadPosts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue:  ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }


  loadPosts = async () => {
   
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage), 
      allPosts: postsAndPhotos, 
    });
  }
  //Paginação de Posts 
  loadMorePosts = () => {

    const {
      page,  //Página Atual
      postsPerPage, //Número de posts por página
      allPosts, //Total de posts
      posts //array com os posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts); //Spreading Operator 

    this.setState({posts, page: nextPage}); //Definição da página atual
  }

  handleChange = (e) => {
    const {value} = e.target; //O método target aponta para onde ocorrerá a ação do evento
    //Mas neste caso ele aponta para o conteúdo digitado no input
    this.setState({ searchValue: value });
  }


  render() {
    const  { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? posts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;
    return (
      <section className='container'>
        <div class="search-container">
          <> 
          <h1>Search Value: {searchValue}</h1> <br></br>
          </>
      

        <TextInput 
        handleChange={this.handleChange}
        searchValue={searchValue}
        />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts= {filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts</p>
        )}

      <div className='button-container'>
        {!searchValue && (
          <Button 
          onClick = {this.loadMorePosts}
          text="Load more posts" 
          disabled={noMorePosts}/>
        )}
      </div>
      
      </section>
    );
  }
}

export default Home;

/*

Operação de Curto Circuito 


        {!!searchValue && (
          <> 
          <h1>Search Value: {searchValue}</h1> <br></br>
          </>
        )}

Neste caso ococrreu a transformação do conteúdo de searchValue em boolean
Se não tiver nenhum tipo de dado atribuido a ele, a condição será falsa e 
não haverá a ocorrência da operação de curto circuito, sendo explicitado
após os operadores de &&


const noMorePosts = page + postsPerPage >= allPosts.length;
Condição para habilitar/desabilitar o botão de carregar mais posts


Para filtrar os posts conforme o conteúdo digitado na barra de pesquisa,
eu não posso utilizar os allposts pois eu posso modifica-lo estando na memória

const filteredPosts = !!searchValue ? posts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

Nesta linha de código eu fazendo uma filtração dos posts que possuem o mesmo title
em relação ao que eu digito (searchValue) no input. Se tiver traz o post, caso contrário
ele não traz nada


*/