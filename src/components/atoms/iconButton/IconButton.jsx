import style from './IconButton.module.css'

const IconButton = ({icon,onClick}) => {
    return (<button style={style.searchButton} onClick={onClick}>
        <div className={style.searchIcon}>{icon}</div>
    </button>);

}
export default IconButton;