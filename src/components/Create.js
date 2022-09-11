import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');

  let sendData = (obj) => {
    setFormClass('hide');
      setLineClass('');
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(obj)
      })
      .then( response => response.json())
      .then(response => {
        console.log(response);
        if (response.result) {
          setUrl(env.url + '/' + response.url);
        }
      })
    }

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Заповніть поля');
      return false;
    }
    sendData({"note" : note});
    }

  return (
    <div className="row">
      <div className="col-12">
        <div className="text">
          <form onSubmit={loadDataFromForm} className={formClass}>
            <div className="form-group">
              <label htmlFor="">Введіть замітку</label>
              <textarea name="note" id="note" defaultValue="Test" className="form-control"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary text-right">Створити</button>
            </div>
          </form>
          <div className={lineClass}>
            <div className="alert alert-primary">{url}</div>
            <p>Скопіюйте URL та передайте адресату</p>
            <div><button onClick={function(){window.location.reload()}} className="btn btn-primary">Створити нову замітку</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;