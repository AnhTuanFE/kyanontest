import clsx from "clsx";
import styles from "./Home.module.scss";
function Home() {
  return (
    <div className={clsx(styles.wrap_home)}>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
