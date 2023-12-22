import './style.css'

export const PostCard = ({posts}) => {
  //Ou const posts = props.post;
  return (
    <div className='post'>
    <div key={posts.id} className='post-content'>
    <h2>{posts.title}</h2>
    <img src={posts.cover} alt={posts.title}></img>
    <p>{posts.body}</p>
    </div>
    </div>
  )
}

//Posso declarar cada chave do meu objeto, não necessitando fazer posts.id, por exemplo
//Neste caso eu colocaria id apenas

//Eu posso declarar este componente dessa maneira
/*
export const PostCard = ({posts}) => (
    <div className='post'>
    <div key={posts.id} className='post-content'>
    <h1>{posts.title}</h1>
    <img src={posts.cover} alt={posts.title}></img>
    <p>{posts.body}</p>
    </div>
    </div>
);
*/