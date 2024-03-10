import { useSelector } from 'react-redux';

function Attribute( {attribute, dice, bonus, skills} ) {
    const character = useSelector(store => store.character);

    return <>
        <h4>{attribute}: {character[dice]}D{character[bonus] > 0 && <>+{character[bonus]}</>}</h4>
        {character[skills]?.length > 0 && <ul>{character[skills].map(skill => 
            <li key={skill.id}>{skill.skill_name} {skill.skill_dice}D{skill.skill_bonus > 0 && <>+{skill.skill_bonus}</>}</li>)}</ul>}
    </>;
}

export default Attribute;