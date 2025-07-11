import style from './General.module.css';

function ArrowDownIcon(){
    return(
        <>
        <img  className={style.arrowCircleIcon} src={`${process.env.PUBLIC_URL}/assets//img/arrow-down-circle.png`} alt='arrowDown'/>
        </>
    );
}

export default ArrowDownIcon;
