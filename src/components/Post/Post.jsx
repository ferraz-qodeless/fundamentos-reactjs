import styles from './Post.module.css';

export function Post(props) {
  return (
    <div>
      <strong className={styles.author}>{props.author}</strong>
      <p className={styles.content}>{props.content}</p>
    </div>
  )
}