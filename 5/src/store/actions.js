export const getInitialNotes = () => {
    return {
        type: 'GET_NOTES'
    }
}

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