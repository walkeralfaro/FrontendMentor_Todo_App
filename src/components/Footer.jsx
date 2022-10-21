import styles from '../scss/components/Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.attribution}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>
        . Coded by
        <a href="https://github.com/WalkerAlfaro"> Walker Alfaro Trelles</a>.
      </div>
    </footer>
  )
}