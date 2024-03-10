import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TextareaEdit( {setIsEditing, propertyToChange} ) {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character);
    const [value, setValue] = useState(character[propertyToChange]);

    const handleSave = event => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: {
                ...character,
                [propertyToChange]: value
            }
        });
        setIsEditing(false);
    }

    return <>
        <form onSubmit={event => handleSave(event)}>
            <textarea defaultValue={value} onChange={event => setValue(event.target.value)}></textarea>
            <button>Save</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
    </>;
}

export default TextareaEdit;