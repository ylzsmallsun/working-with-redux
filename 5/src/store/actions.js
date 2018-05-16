import notesRef from '../config/firebase.js';
import _ from 'lodash';

export const fetchNotes = () => async dispatch => {
    notesRef.on("value", snapshot => {
        const fbStore = snapshot.val();
        const store = _.map(fbStore, (value, id) => {
            return {
                id: id,
                title: value.title,
                details: value.details
            }
        });
        dispatch({
            type: 'GET_NOTES',
            payload: store
        });
    });
};

export const addNewNote = note => async dispatch => {
    notesRef.push(note, response => response);
};

export const removeNote = id => async dispatch => {
    notesRef.child(id).remove();
};

export const updateNote = note => async dispatch=> {
    notesRef.child(note.id).update({ details: note.details });
}
