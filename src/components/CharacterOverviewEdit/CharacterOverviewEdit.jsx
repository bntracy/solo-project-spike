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
            type: 'EDIT_OVERVIEW',
            payload: {
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
                <label htmlFor="species">Species: </label>
                <input type="text" name="species" value={newSpecies} onChange={event => setNewSpecies(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="gender">Gender: </label>
                <input type="text" name="gender" value={newGender} onChange={event => setNewGender(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="physical-description">Physical Description: </label>
                <input type="text" name="physical-description" value={newPhysicalDescription} onChange={event => setNewPhysicalDescription(event.target.value)}/>
            </div>
            <button>Save</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default CharacterOverviewEdit;