import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CharacterOverviewEdit({setIsEditing}) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [newSpecies, setNewSpecies] = useState(character.species);
    const [newGender, setNewGender] = useState(character.gender);
    const [newPhysicalDescription, setNewPhysicalDescription] = useState(character.physical_description);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                species: newSpecies,
                gender: newGender,
                physical_description: newPhysicalDescription
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={() => handleSave(event)}>
            <div>
                <label>Species: </label>
                <input type="text" value={newSpecies} onChange={event => setNewSpecies(event.target.value)}/>
            </div>
            <div>
                <label>Gender: </label>
                <input type="text" value={newGender} onChange={event => setNewGender(event.target.value)}/>
            </div>
            <div>
                <label>Physical Description: </label>
                <input type="text" value={newPhysicalDescription} onChange={event => setNewPhysicalDescription(event.target.value)}/>
            </div>
            <button>Save</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default CharacterOverviewEdit;