import { useSubmit } from "react-router-dom";
import classes from "./MarvelItem.module.css"

function MarvelItem({event}){
    const submit = useSubmit();
    function startDeleteHandler() {
      const proceed = window.confirm("Are you sure?");
      if(proceed){
        submit(null,{method:'DELETE'});
      }
    }
  
    return (
      <article className={classes.event}>
        <img src={event.image} alt={event.title} />
        <h1>{event.title}</h1>
        <time>{event.date}</time>
        <p>{event.tags}</p>
        <menu className={classes.actions}>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      </article>
    );
}

export default MarvelItem;