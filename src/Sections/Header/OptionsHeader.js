import styles from './header.module.css'

function OptionsHeader({link, section}){
    return <a href={`#${link}`} className={styles.Option} >{section}</a>
}

export default OptionsHeader;