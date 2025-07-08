import ThemeChanger from "../../components/themeChanger";
import OptionsHeader from "./OptionsHeader";
import styles from './header.module.css'
import {useState, useEffect} from "react";


function HeaderSection(){
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY; // Posição do scroll vertical
        setIsSticky(scrollY > 0); // Ativa o sticky ao rolar mais de 50px
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup: Remove o evento ao desmontar o componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  

   return(
    <nav className={`${styles.sticky} ${isSticky ? styles.stickyActive : ''}`}>
        <OptionsHeader section={"Skills"}/>
        <OptionsHeader section={"About Me"}/>
        <OptionsHeader section={"Home"}/>
        <OptionsHeader section={"Projects"}/>
        <OptionsHeader section={"Contact"}/>
        <ThemeChanger/>
    </nav>
)};


export default HeaderSection;


