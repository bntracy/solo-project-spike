import { useSelector } from 'react-redux';

function Attribute( {attribute, dice, bonus} ) {
    const character = useSelector(store => store.character);

    return <>
        <h4>{attribute}: {character[dice]}D+{character[bonus]}</h4>
    </>;
}

export default Attribute;