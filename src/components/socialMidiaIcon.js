import style from './General.module.css'

function SocialMidiaIcon({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={`${process.env.PUBLIC_URL}/assets/img/` + icon} alt="Social Media Icon" className={style.socialMidiaIcon}/>  
    </a>
    );

}
export default SocialMidiaIcon;