import Options_header from "./Options_header";
import styles from './header.module.css'


function Header_Section(){
   return(
    <header className={styles.Header_section}>
        <Options_header section={"Skills"}/>
        <Options_header section={"About Me"}/>
        <Options_header section={"Home"}/>
        <Options_header section={"Projects"}/>
        <Options_header section={"Contact"}/>
    </header>
)};


export default Header_Section;


