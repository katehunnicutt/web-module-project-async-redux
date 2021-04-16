import GET_CHARACTERS from '../actions/indexA'

const initialState = {
    characters: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state
    }
}

//export default reducer