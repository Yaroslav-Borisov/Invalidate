import { useQueryClient } from '@tanstack/react-query';
import './App.css';
import { usePosts } from './hooks/usePosts';
import { IPost } from './interfaces';

const isAuth = true;

function App() {
  const { posts, isLoading } = usePosts(isAuth);
  const queryClient = useQueryClient();

  return (
    <>
      <h1>TanStack Query v5</h1>
      <button onClick={() => queryClient.invalidateQueries({ queryKey: ['posts'] })}>
        Invalidate queries
      </button>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {posts ? (
            posts.map((post: IPost) => <li key={post.id}>{post.title}</li>)
          ) : (
            <h2>Not found</h2>
          )}
        </ul>
      )}
    </>
  );
}

export default App;
