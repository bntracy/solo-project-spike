import { useState } from 'react';
import { useSelector } from 'react-redux';

import CharacterOverviewEdit from '../CharacterOverviewEdit/CharacterOverviewEdit';

function CharacterOverview() {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        {isEditing ? <CharacterOverviewEdit setIsEditing={setIsEditing} /> : <>
        <div>Species: {character.species}</div>
        <div>Gender: {character.gender}</div>
        <div>Physical Description: {character.physical_description}</div>
        <button onClick={() => setIsEditing(true)}>Edit</button></>}
    </>;
}

export default CharacterOverview;