import styles from './home-page.module.css'
import { HeaderComponent } from "../../components/header/header.component"
import { SidebarComponent } from '../../components/sidebar/sidebar.component'
import { PostComponent } from '../../components/post/post.component'

export const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <div className={styles.wrapper}>
        <SidebarComponent />
        <main>
          <PostComponent />
        </main>
      </div>
    </>
  )
}
