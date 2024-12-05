import styles from './header.module.css'

function Options_header({link, section}){
    return <a href={link} className={styles.Option}>{section}</a>
}

export default Options_header;