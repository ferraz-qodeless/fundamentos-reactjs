import styles from "./Header.module.css"

import igniteLoogo from "../../assets/ignite-logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLoogo} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}