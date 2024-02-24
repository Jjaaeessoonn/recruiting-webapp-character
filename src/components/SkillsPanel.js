import React from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js';

const SkillsPanel = ({intelligence}) => {
    const [skillPoints, setSkillPoints] = React.useState(Math.max(10+4*intelligence, 0));

    const [baseSkills, setBaseSkills] = React.useState({
        'Acrobatics': 0,
        'Animal Handling': 0,
        'Arcana': 0,
        'Athletics': 0,
        'Deception': 0,
        'History': 0,
        'Insight': 0,
        'Intimidation': 0,
        'Investigation': 0,
        'Medicine': 0,
        'Nature': 0,
        'Perception': 0,
        'Performance': 0,
        'Persuasion': 0,
        'Religion': 0,
        'Sleight of Hand': 0,
        'Stealth': 0,
        'Survival': 0,
    });


    React.useEffect(()=>{
        setSkillPoints(Math.max(10+4*intelligence, 0));
    }, [intelligence]);

    return (
    <div className='container-skills'>
        <h1>Skills Panel</h1>
        <div>Total skill points available: {skillPoints}</div>
        <div className='skill-panel'>
            {
                SKILL_LIST.map((skill)=>{
                    const name = skill['name'];
                    const attributeModifier = skill['attributeModifier'];
                    return (
                        <div>{name}: {baseSkills[name]}(Modifier: {attributeModifier}): 0
                        <button >+</button>
                        <button >-</button>
                        Total: {baseSkills[name]}
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default SkillsPanel