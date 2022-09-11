import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');


  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ "url": noteURL })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.result) {
          setNoteText(response.note);
          setLineClass('');
          setFormClass('hide');
          setErrorClass('hide');
        } else if (!response.result) {
          setLineClass('hide');
          setFormClass('hide');
          setErrorClass('');
        }
      })
  } else {
    setLineClass('hide');
    setFormClass('');
    setErrorClass('hide');
  }
}, []);

  function getNote(event){
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Заповніть поля');
      return false;
    }
    noteURL = url;
    window.location.href = env.url+'/'+url;
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className={lineClass}>
          <h4>Note:</h4>
          <div>{noteText}</div>
        </div>
        <div className={errorClass}>
          <div className="text">
            <p>Сталася помилка. Такий Note не знайдено.</p>
          </div>
        </div>
        <div className={formClass}>
          <form action="" onSubmit={getNote}>
            <div className="form-group">
              <label htmlFor="url">Введіть хеш замітки</label>
              <input type="text" name="url" id="url" className="form-control" />
            </div>
            <div className="form-group text-right">
              <button type="submit" className="btn btn-primary">Шукати Note</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Note;