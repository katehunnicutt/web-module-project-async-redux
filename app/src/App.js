import CharacterList from "./components/CharacterList";
import styled from 'styled-components'

const AppStyled = styled.div`
    display: flexbox;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    color: red;
    font-size: 2.5rem;
    height: 60%;
`
export default function App() {
    return(
        <AppStyled>
        <CharacterList />
        </AppStyled>
    )
}