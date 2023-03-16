import { ThumbsUp, Trash } from 'phosphor-react'
import { AvatarComponent } from '../avatar/avatar.component'
import styles from './comment-component.module.css'

export const CommentComponent = () => {
  return (
    <div className={styles.comment}>
     <AvatarComponent url='https://github.com/gravinawilliam.png' style={{border: false}}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>William Gravina</strong>
              <time title='22 de junho às 11:22' dateTime='22-06-2022 11:22:00'>Comentado há 1h</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
