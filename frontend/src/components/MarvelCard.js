import { Link } from "react-router-dom";
import classes from "./MarvelCard.module.css";

function MarvelCard({ id , image , title , date}){
    return (
        <div className={classes.card}>
        <Link to = {`/${id}`}>
        <div className={classes.image}>
            <img src = {image} alt = "card"/>
        </div>
        </Link>
            <h2>{title}</h2>
            <h5>{date}</h5>
        </div>   
    )
}

export default MarvelCard;

