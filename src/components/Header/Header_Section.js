import Options_header from "./Options_header";
import styles from './header.module.css'
import React, {useState, useEffect} from "react";


function Header_Section(){
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
    <nav className={styles.sticky}>
        <Options_header section={"Skills"}/>
        <Options_header section={"About Me"}/>
        <Options_header section={"Home"}/>
        <Options_header section={"Projects"}/>
        <Options_header section={"Contact"}/>
    </nav>
)};


export default Header_Section;


