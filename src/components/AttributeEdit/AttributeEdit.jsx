import { useState } from 'react';
import { useSelector } from 'react-redux';

function AttributeEdit( {attribute, dice, bonus, skills, setIsEditing} ) {
    const character = useSelector(store => store.character);
    const [newDice, setNewDice] = useState(character[dice]);
    const [newBonus, setNewBonus] = useState(character[bonus]);

    return <>
        <form>
            <h4>{attribute}:</h4>
                <input type="number" value={newDice} onChange={event => setNewDice(event.target.value)}/>
                D+
                <input type="number" value={newBonus} onChange={event => setNewBonus(event.target.value)}/>
            <button>Save</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default AttributeEdit;