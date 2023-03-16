import styles from './header-component.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
    </header>
  )
}
