import React, { Component } from 'react';
import Single from './Single';

export default class Grid extends Component {
  removeNote(id) {
    this.props.removeNote(id);
  }
  updateNote(note) {
    this.props.updateNote(note);
  }
  renderItems(){
    return this.props.notes.map(item => 
      <Single
          key={item.id}
          note={item}
          removeNote={this.removeNote.bind(this)}
          updateNote={this.updateNote.bind(this)}
      />
      );
  }
  render() {
    return (
      <div className="row">
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}
