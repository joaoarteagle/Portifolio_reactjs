import SocialMidiaList from "../../components/socialMediaList";
import styles from "../Section.module.css";

function Home() {
  return (
    <section className={styles.Sections}>
      <div className={styles.home_container_items}>
        <div className={styles.home_title_container}>
          <h1>FULL-STACK DEVELOPER</h1> 
          <p>João Paulo Andrade</p>
        </div>
        <img
          className={styles.home_coffee_image}
          src="assets//img/Coffee.png"
        />

      </div>

      <SocialMidiaList />
    </section>
  );
}

export default Home;
