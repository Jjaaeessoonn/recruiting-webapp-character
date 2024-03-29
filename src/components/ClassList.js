import React from 'react'
import './styles.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js';

const ClassList = ({attributes}) => {
    const [showStats, setShowStats] = React.useState('');

    const classes = Object.keys(CLASS_LIST);
    const barbarian = CLASS_LIST['Barbarian'];
    const wizard = CLASS_LIST['Wizard'];
    const bard = CLASS_LIST['Bard'];

    function isClass(item) {
        if (item === 'Barbarian'){
            if (barbarian['Strength'] <= attributes[0] &&
                barbarian['Dexterity'] <= attributes[1] &&
                barbarian['Constitution'] <= attributes[2] &&
                barbarian['Intelligence'] <= attributes[3] &&
                barbarian['Wisdom'] <= attributes[4] &&
                barbarian['Charisma'] <= attributes[5]
            ) return true;
        } else if (item === 'Wizard') {
            if (wizard['Strength'] <= attributes[0] &&
                wizard['Dexterity'] <= attributes[1] &&
                wizard['Constitution'] <= attributes[2] &&
                wizard['Intelligence'] <= attributes[3] &&
                wizard['Wisdom'] <= attributes[4] &&
                wizard['Charisma'] <= attributes[5]
            ) return true;
        } else if (item === 'Bard') {
            if (bard['Strength'] <= attributes[0] &&
                bard['Dexterity'] <= attributes[1] &&
                bard['Constitution'] <= attributes[2] &&
                bard['Intelligence'] <= attributes[3] &&
                bard['Wisdom'] <= attributes[4] &&
                bard['Charisma'] <= attributes[5]
            ) return true;
        }
        return false;
    }

    function handleClickStats(key){
        if (showStats === key) {
            setShowStats('');
            console.log('close showStats');
            return;
        }
        setShowStats(key);
        console.log(`open showStats for ${key}`);
        return;
    }

    return (
    <div className='container-classlist'>
        <h1>Class List</h1>
        {
            classes.map(item=>(
                <div onClick={()=>handleClickStats(item)}
                className={ isClass(item) ? 'class-item-active':'class-item' }>
                    <div>{item}</div>
                    {
                        showStats === item ?
                        <div className='class-stats'>
                            {Object.entries(CLASS_LIST[item])}
                        </div>:null
                    }
                </div>
            ))
        }
    </div>
    )
}

export default ClassList