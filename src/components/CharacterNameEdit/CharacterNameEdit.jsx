import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CharacterNameEdit( {setIsEditing} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [newName, setNewName] = useState(character.character_name);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                character_name: newName
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={() => handleSave(event)}>
            <div>
                <label htmlFor="character-name">Character Name:</label>
                <input type="text" name="character-name" required value={newName} onChange={event => setNewName(event.target.value)}/>
            </div>
            <button>Save</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default CharacterNameEdit;