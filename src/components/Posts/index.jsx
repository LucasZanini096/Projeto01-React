import './style.css'

import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => (

  <div className='posts'>
    {posts.map(posts => (
      <PostCard 
      posts={posts}
      />
    ))}
  </div>
);