import { useState } from 'react';
import { useSelector } from 'react-redux';
import TextareaEdit from '../TextareaEdit/TextareaEdit';

function Equipment() {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        <h4>Equipment:</h4>
        {isEditing ? <TextareaEdit setIsEditing={setIsEditing} propertyToChange="equipment"/> : <>
            <p>{character.equipment}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>}
    </>;
}

export default Equipment;