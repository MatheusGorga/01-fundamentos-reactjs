import { Avatar } from '../Avatar/Avatar';
import styles from './Post.module.css';
function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/MatheusGorga.png' />
          <div className={styles.authorInfo}>
            <strong>Matheus</strong>
            <small>Dev</small>
          </div>
        </div>

        <time title='10 de outubro as 20:20:10' dateTime='2023-10-10 20:20:10'>
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>lorem ipsum</p>
      </div>
    </article>
  );
}

export default Post;
