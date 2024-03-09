import { useSelector } from 'react-redux';

function Notes() {
    const character = useSelector(store => store.character);
    return <>
        <h4>Notes:</h4>
        <p>{character.notes}</p>
        <button>Edit</button>
    </>;
}

export default Notes;