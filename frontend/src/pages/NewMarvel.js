import MarvelForm from "../components/MarvelForm";
import {json , redirect} from 'react-router-dom';

function NewMarvel(){
    return (
        <MarvelForm method = "post"/>
    )
}


export default NewMarvel;

export async function action({request}){
    const data = await request.formData();
    const newEvent = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description:data.get('description'),
    }
  
    const response = await fetch("http://localhost:8080/events",
      {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newEvent),
    });
  
    if(response.status === 422){
        return response;
    }
    
    if(!response.ok){
        throw json({message:'Sorry! Form could not be submitted'},{status:500});
    }
  
    return redirect("/");
  }