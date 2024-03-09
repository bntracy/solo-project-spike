function CharacterOverviewEdit({setIsEditing}) {
    return <>
        <p>Edit form goes here</p>
        <button>Save</button>
        <button onClick={()=>setIsEditing(false)}>Cancel</button>
    </>;
}

export default CharacterOverviewEdit;