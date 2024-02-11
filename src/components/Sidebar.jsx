import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>Cities</p>

      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; 2021 Travelicious</p>
      </footer>
    </div>
  );
}
