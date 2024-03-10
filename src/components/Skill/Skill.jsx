function Skill( {skill} ) {
    return <>
        <li>{skill.skill_name} {skill.skill_dice}D{skill.skill_bonus > 0 && <>+{skill.skill_bonus}</>}</li>
    </>;
}

export default Skill;