import SocialMidiaList from "../../components/socialMediaList";
import styles from "../Section.module.css";

function Home(id) {
  return (
    <section className={styles.Sections} id={id}>
      <div className={styles.home_container_items}>
        <div className={styles.home_title_container}>
          <h1>FULL-STACK DEVELOPER</h1> 
          <p>João Paulo Andrade</p>
        </div>
        <img
          className={styles.home_coffee_image}
          src={`${process.env.PUBLIC_URL}/assets/img/Coffee.png`}
          alt="coffeLogo"
        />

      </div>

      <SocialMidiaList />
    </section>
  );
}

export default Home;
