import notesRef from '../config/firebase.js';
import _ from 'lodash';

export const getInitialNotes = () => async dispatch => {
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

export const addNewNote = (note) => {
    return {
        type: 'ADD_NOTE',
        note
    }
}

export const removeNote = (id) => {
    return {
        type: 'REMOVE_NOTE',
        id
    }
}

export const updateNote = (note) => {
    return {
        type: 'UPDATE_NOTE',
        note
    }
}