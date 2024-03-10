import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Attribute from '../Attribute/Attribute';
import CharacterName from '../CharacterName/CharacterName';
import CharacterOverview from '../CharacterOverview/CharacterOverview';
import Equipment from '../Equipment/Equipment';
import Notes from '../Notes/Notes';

function Character() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CHARACTER' });
      }, []);

    return <>
        <CharacterName />
        <CharacterOverview />
        <Attribute attribute="Dexterity" dice="dexterity_dice" bonus="dexterity_bonus"/>
        <Attribute attribute="Perception" dice="perception_dice" bonus="perception_bonus"/>
        <Equipment />
        <Notes />
    </>;
}

export default Character;