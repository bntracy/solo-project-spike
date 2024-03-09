import { useSelector } from 'react-redux';

function CharacterName() {
    const character = useSelector(store => store.character);
    return <>{character.character_name}</>;
}

export default CharacterName;