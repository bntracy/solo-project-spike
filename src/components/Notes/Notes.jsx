import { useState } from 'react';
import { useSelector } from 'react-redux';
import TextareaEdit from '../TextareaEdit/TextareaEdit';

function Notes() {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        <h4>Notes:</h4>
        {isEditing ? <TextareaEdit setIsEditing={setIsEditing} propertyToChange="notes"/> : <>
            <p>{character.notes}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>}
    </>;
}

export default Notes;