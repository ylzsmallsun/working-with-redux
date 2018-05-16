
const initialState = {
    notes: [],
    name: 'Smallsun'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NOTES': 
            return {
                ...state,
                notes: action.payload
            }  
        default:
            return state
    }
}
