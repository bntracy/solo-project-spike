import { useSelector } from 'react-redux';

function Equipment() {
    const character = useSelector(store => store.character);
    return <>
        <h4>Equipment:</h4>
        <p>{character.equipment}</p>
        <button>Edit</button>
    </>;
}

export default Equipment;