import style from './IconButton.module.css'

const IconButton = ({icon,onClick}) => {
    return (<button style={style.button} onClick={onClick}>
        <div className={style.icon}>{icon}</div>
    </button>);

}
export default IconButton;