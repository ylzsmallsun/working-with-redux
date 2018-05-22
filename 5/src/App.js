import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Whoops404 from './components/errorPage';
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
      <Router>
        <div style={styles}>
          <Header name={this.props.name} />
          <Switch>
            <Route exact path='/' render={(props) => (
              <Page1
              addNewNote={this.props.addNewNote} 
              notes={this.props.notes}
              removeNote={this.props.removeNote}
              updateNote={this.props.updateNote}
              />
            )} />
            <Route path='/page2' component={Page2} />
            <Route path='/page3' component={Page3} />
            <Route component={Whoops404} />
          </Switch>
          {/* <Form addNewNote={this.props.addNewNote} />
          <Grid notes={this.props.notes} removeNote={this.props.removeNote} updateNote={this.props.updateNote} /> */}
        </div>
      </Router>
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
