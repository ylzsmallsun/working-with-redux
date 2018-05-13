const initialState = {
    notes: [
        {
            id: '27812b',
            title: 'An example note',
            details: 'This is an example of a note'
        },
        {
            id: '278922',
            title: 'Another example note',
            details: 'This is an example of a note...again!'
        }
    ],
    name: 'Smallsun'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        case 'REMOVE_NOTE': 
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.id)
            }
        case 'UPDATE_NOTE':
            return {
                ...state,
                notes: state.notes.map(note => {
                    return note.id !== action.note.id ? note:
                    {
                        ...note,
                        details: action.note.details
                    }  
                })
            }
        case 'GET_NOTES':
            return {
                ...state
            }
        default:
            return state
    }
}
