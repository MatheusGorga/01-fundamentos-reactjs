import { Avatar } from '../Avatar/Avatar';
import Comment from '../Comment/Comment';
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

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          // onChange={handleNewCommentChange}
          name='comment'
          // value={newCommentText}
          placeholder='Deixe seu comentário'
          //onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button /* disabled={newCommentText.length === 0} */ type='submit'>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}

export default Post;
