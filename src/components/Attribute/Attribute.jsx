import { useState } from 'react';
import { useSelector } from 'react-redux';

import AttributeEdit from '../AttributeEdit/AttributeEdit';
import Skill from '../Skill/Skill';

function Attribute( {attribute, dice, bonus, skills} ) {
    const character = useSelector(store => store.character);
    const [isEditing, setIsEditing] = useState(false);

    return <>
        {isEditing ? <AttributeEdit attribute={attribute} dice={dice} bonus={bonus} skills={skills} setIsEditing={setIsEditing}/> : <>
            <h4>{attribute}: {character[dice]}D{character[bonus] > 0 && <>+{character[bonus]}</>}</h4>
            {character[skills]?.length > 0 && <ul>{character[skills].map(skill => <Skill key={skill.id} skill={skill}/>)}</ul>}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </>}
    </>;
}

export default Attribute;