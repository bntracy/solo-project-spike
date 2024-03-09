import { useSelector } from 'react-redux';

function Equipment() {
    const character = useSelector(store => store.character);
    return <>
        <h4>Equipment:</h4>
        {character.equipment}
    </>;
}

export default Equipment;