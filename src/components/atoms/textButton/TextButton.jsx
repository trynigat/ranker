import style from './TextButton.module.css'

const TextButton = ({text,onClick}) => {


    return (<button className={style.button} onClick={onClick}>
        <div className={style.text}>{text}</div>
    </button>);

}
export default TextButton;