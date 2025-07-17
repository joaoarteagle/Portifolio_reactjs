
import styles from "../Section.module.css"

export default function AboutMe(id){
    return(
            <section className={styles.Sections} id={id}>
            <div>
                <img className={styles.myPhoto} src={`${process.env.PUBLIC_URL}/assets//img/myphoto.jpeg`} alt="minha foto"/>
                <p>Software Engineering student and Full-stack developer with knowledge in Java, Nodejs, ReactJs, NestJs.</p>
            </div>
        </section>
    )
}

