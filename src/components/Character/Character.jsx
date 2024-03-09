import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
        <Equipment />
        <Notes />
    </>;
}

export default Character;