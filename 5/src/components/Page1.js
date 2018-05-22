import React from 'react';
import Grid from './Grid';
import Form from './Form';

const Page1 = (props) => {
  return (
    <div>
      <Form addNewNote={props.addNewNote} />
      <Grid notes={props.notes} removeNote={props.removeNote} updateNote={props.updateNote} />
    </div>
  );
}

export default Page1;
