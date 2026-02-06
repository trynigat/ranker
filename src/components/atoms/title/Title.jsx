import style from './Title.module.css'

const Title = ({text}) => {
    return <div className={style.title}>{text}</div>;
}

export default Title;