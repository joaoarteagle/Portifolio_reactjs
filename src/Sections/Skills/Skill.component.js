import style from "./Skills.module.css"

export default function SkillComponent({skillName, skillDescription, subDescription, skills, skillIcon}){
    return(
        <div className={style.stackContainer}>
            <img src={`${process.env.PUBLIC_URL}/assets/img/${skillIcon}`} alt="skill icon"/>
            <h2>{skillName}</h2>
            <p>{skillDescription}</p>
            <ul>
                <h3 className={style.subDescription}>{subDescription}:</h3>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}