import { useLoaderData , json} from "react-router-dom";
import MarvelItem from "../components/MarvelItem";


function MarvelDetails() {
  const event = useLoaderData();
  return <MarvelItem  event = {event}/>
}

export default MarvelDetails;


export async function loader({params}){
  const id = params.marvelId;
  const response = await fetch('http://localhost:8080/events/' + id);
  if(!response.ok){
    throw json({message:"Could not load required page"},{status:500});
  }else{
    const resData = await response.json();
    return resData.event;
  }
}
