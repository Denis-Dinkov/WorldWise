import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>Cities</p>

      <footer className=""></footer>
    </div>
  );
}
