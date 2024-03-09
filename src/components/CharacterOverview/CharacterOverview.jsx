import { useSelector } from 'react-redux';

function CharacterOverview() {
    const character = useSelector(store => store.character);
    return <>
        <div>Species: {character.species}</div>
        <div>Gender: {character.gender}</div>
        <div>Physical Description: {character.physical_description}</div>
    </>;
}

export default CharacterOverview;