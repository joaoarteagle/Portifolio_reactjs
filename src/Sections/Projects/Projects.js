import styles from './Projects.module.css'
const ProjectsCard = ({nameProject, urlRepository, img, description}) =>{
    return(

        <div className={styles.ProjectContainer}>
            <h3 className={styles.ProjectName}>{nameProject}</h3>
            <a href={urlRepository} target="_blank" rel="noopener noreferrer">
                <img src={"assets//img/" + img}/>
            </a>
            <p className={styles.DescriptionProject}>{description}</p>

        </div>


    )
}

export default ProjectsCard