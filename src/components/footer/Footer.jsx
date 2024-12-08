import styles from './footer.module.css';

const Footer = () =>{
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logo}>ACR</div>
        <div className={styles.text}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </footer>
  )
}

export default Footer;