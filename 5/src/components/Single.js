import React from 'react';

const Single = (props) => {
  return (
    <li className="col s4">
      <div className="card teal darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.note.title}</span>
          <textarea value={props.note.details} 
          onChange={(evt) => props.updateNote({id: props.note.id, details: evt.target.value })} />
        </div>
        <div className="card-action">
          <a onClick={() => props.removeNote(props.note.id)}>Delete</a>
        </div>
      </div>
    </li>

  );
}

export default Single;
