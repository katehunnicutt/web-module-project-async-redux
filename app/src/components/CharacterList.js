import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchData } from "../store/indexS"

const CharacterList = (props) => {
    useEffect(() => {
        props.fetchData()
    }, []) 
    return(
        <div className="characterList">
        {props.characters.map((char) => (
            <div className="character-box" key={char.index}>
                 <p key={char.index}>{char.name}</p>
                 <img src={char.image}/>
                 </div>

        ))}
    </div>

        
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
} 

export default connect(mapStateToProps, { fetchData })(CharacterList)