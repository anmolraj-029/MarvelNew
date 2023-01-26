import { useNavigate , Form, useActionData} from 'react-router-dom';
import classes from './MarvelForm.module.css';

function MarvelForm( { event}) {
  const data = useActionData();

  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method = 'post' className={classes.form}>
     {data && data.errors && Object.values(data.errors).map(error => <li key = {error}>{error}</li>)}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"  required defaultValue={event?event.title:''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?event.image:''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?event.date:''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?event.description:''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
}

export default MarvelForm;

// This will be called whenever some request like post put will be called

