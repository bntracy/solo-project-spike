import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Character() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CHARACTER' });
      }, []);

    return <>

    </>;
}

export default Character;