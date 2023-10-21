import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';
function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/MatheusGorga.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus</strong>
              <time
                title='10 de outubro as 20:20:10'
                dateTime='2023-10-10 20:20:10'
              >
                Publicado a 1h
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>0</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
