import style from './General.module.css'
function TitleSection({text}){
    return(
        <h1 className={style.TitleSection}>
            {text}
        </h1>
    )
}

export default TitleSection