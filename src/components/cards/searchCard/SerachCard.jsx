import style from './SearchCard.module.css';
import TextButton from "../../atoms/textButton/TextButton.jsx";
import Title from "../../atoms/title/Title.jsx";

const SerachCard = ({title}) => {
    return (<div className={style.searchCard}>
        <Title text={title}></Title>
        <TextButton text={"Add to ranking + "}></TextButton>
    </div>)


}
export default SerachCard