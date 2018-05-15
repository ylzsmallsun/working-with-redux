import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import  { fetchNotes, addNewNote, removeNote, updateNote } from './store/actions';


// styles in-component - pay attention to the syntax
const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
};


// statefull component
class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Header name={this.props.name} />
        <Form addNewNote={this.props.addNewNote} />
        <Grid notes={this.props.notes} removeNote={this.props.removeNote} updateNote={this.props.updateNote} />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNotes: () => {
      dispatch(fetchNotes())
    },
    addNewNote: (note) => {
      dispatch(addNewNote(note))
    },
    removeNote: (id) => {
      dispatch(removeNote(id))
    },
    updateNote: (note) => {
      dispatch(updateNote(note))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name: state.name
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
