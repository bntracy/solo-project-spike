import { useSelector } from 'react-redux';

function Notes() {
    const character = useSelector(store => store.character);
    return <>
        <h4>Notes:</h4>
        {character.notes}
    </>;
}

export default Notes;