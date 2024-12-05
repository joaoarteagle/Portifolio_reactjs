import TitleSection from "../../components/General/TitleSection";
import Button from "../../components/General/Button";
import styles from "../Section.module.css"

function AboutMe(){
    return(
        <section className={styles.Sections}>
            <TitleSection text={"About me"}/>
            <Button text={"Contact Me"}/>
        </section>
    )
}

export default AboutMe