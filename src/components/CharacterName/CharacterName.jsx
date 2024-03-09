import { useSelector } from 'react-redux';

function CharacterName() {
    const character = useSelector(store => store.character);
    return <>
        <h2>{character.character_name}</h2>
        <button>Edit Name</button>
    </>;
}

export default CharacterName;