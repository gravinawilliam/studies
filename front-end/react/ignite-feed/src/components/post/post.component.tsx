import { AvatarComponent } from '../avatar/avatar.component'
import { CommentComponent } from '../comment/comment.component'
import styles from './post-component.module.css'
export const PostComponent = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <AvatarComponent style={{border: true}} url='https://github.com/diego3g.png'
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='22 de junho às 11:22' dateTime='22-06-2022 11:22:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
      </div>

    </article>
  )
}
