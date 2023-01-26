import { useLoaderData , json} from "react-router-dom";
import MarvelCard from "../components/MarvelCard";
import classes from "./HomePage.module.css";

function HomePage(){
    const marvelItems = useLoaderData();
    return (
        <>
        <div className={classes.layout}>
        {
        marvelItems.map((item) => 
            <MarvelCard key = {item.id}  id = {item.id} image={item.image} title = {item.title} date = {item.date}/>
            )
        }
        </div>
        </>
    )
}

export default HomePage;

export async function loader(){
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json(
            {message:"Data could not be fetched"},
            {
                status:500,
            }
        );
    } else {
      const resData = await response.json();
      return resData.events;
    }
  }

