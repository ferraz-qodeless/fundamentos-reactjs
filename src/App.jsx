import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post'

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            avatar="https://github.com/ferraz-qodeless.png"
            author="Renato Ferraz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima cum repudiandae non eius et sit impedit veniam corporis, commodi laudantium sed quia enim perferendis voluptatibus quos nulla sint laborum."
          />
          <br />
          <Post
            avatar="https://github.com/ferraz-qodeless.png"
            author="Renato Ferraz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima cum repudiandae non eius et sit impedit veniam corporis, commodi laudantium sed quia enim perferendis voluptatibus quos nulla sint laborum."
          />
          <br />
          <Post
            avatar="https://github.com/ferraz-qodeless.png"
            author="Renato Ferraz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima cum repudiandae non eius et sit impedit veniam corporis, commodi laudantium sed quia enim perferendis voluptatibus quos nulla sint laborum."
          />
        </main>
      </div>
    </div>
  )
}
