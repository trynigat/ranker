import React from 'react';
import style from './GameCard.module.css';

const GameCard = (props) => {

    return (
        <div className={style.gameCard}>

            <div className={style.gamePosition}>
            <h1>{props.position}</h1>
            </div>
            <span className={style.gameTitle}>{props.title}</span>


        <img className={style.gameImage} src={props.img} alt={""}/>

        </div>
    );
};

export default GameCard;