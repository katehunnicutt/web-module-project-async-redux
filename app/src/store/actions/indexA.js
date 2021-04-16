import axios from 'axios'
//async action creator ooof
const GET_CHARACTERS = "GET_CHARACTERS"
export const fetchData = () => {
    //normally v breakable
    return (dispatch) => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                dispatch({type: GET_CHARACTERS, payload: res.data.results}, console.log(res))
            })
            .catch(err => console.log(err))
    }
}
export default GET_CHARACTERS