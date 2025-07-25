import style from './Projects.module.css'
import ProjectsCard from "./Projects";
import styleSection from '../Section.module.css'

function ProjectList(id){
    return(
        <section className={styleSection.Sections} id={id}>

            <div className={style.ProjectsList}>
            <ProjectsCard nameProject={"Projeto Squirtle"} description={"Um Projeto de uma Landing Page sobre um Pokemon chamado squitle"} urlRepository={"https://joaoarteagle.github.io/esoft5s-bw-a/"} img={"squirtleProject.png"}/>
            <ProjectsCard nameProject={"Projeto Java SpringBoot"} description={"Desenvolvido com Java SpringBoot, CRUD completo de listagem de contatos com validador de dados "} urlRepository={"https://github.com/joaoarteagle/Spring-Boot-REST-API"} img={"ProjetoSpringBootContactsList.jpeg"}/>
            </div>
        </section>
    )
}

export default ProjectList