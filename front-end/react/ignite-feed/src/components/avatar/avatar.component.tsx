import styles from './avatar-component.module.css'

export const AvatarComponent = (props: {
  url: string
  style: {
    border: boolean
  }
}) => {
  return <img className={
    props.style.border ? styles.avatarWithBorder : styles.avatarWithoutBorder
  } src={props.url} />
}
