import styles from './sidebar-component.module.css'
import { PencilLine } from 'phosphor-react'
import { AvatarComponent } from '../avatar/avatar.component'

export const SidebarComponent = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src='https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100' />

      <div className={styles.profile}>
        <AvatarComponent style={{border: true}} url='https://github.com/gravinawilliam.png'/>
        <strong>William Gravina</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}
