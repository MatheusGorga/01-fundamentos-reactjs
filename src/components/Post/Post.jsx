import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from '../Avatar/Avatar';
import Comment from '../Comment/Comment';
import styles from './Post.module.css';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post muito legal, hein!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreteNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function deleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter(
      (item) => item !== comment
    );
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <small>{author.role}</small>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={Math.random()}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={Math.random()}>
                <a href=''> {line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreteNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe seu comentário'
          required
          value={newCommentText}
          onInvalid={handleCommentInvalid}
          onChange={(e) => handleNewCommentChange(e.target.value)}
        />

        <footer>
          <button disabled={newCommentText.length === 0} type='submit'>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment onDeleteComment={deleteComment} content={comment} />;
        })}
      </div>
    </article>
  );
}

export default Post;
