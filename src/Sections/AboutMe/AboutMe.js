
import styles from "../Section.module.css"

function AboutMe(){
    return(
        <section className={styles.Sections}>
            <div>
                <img className={styles.myPhoto} src={`${process.env.PUBLIC_URL}/assets//img/myphoto.jpeg`} alt="minha foto"/>
                <p>Software Engineering student and Full-stack developer with knowledge in Java, Nodejs, ReactJs, NestJs.</p>
            </div>
        </section>
    )
}

export default AboutMe