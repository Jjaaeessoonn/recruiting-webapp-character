import React from 'react'
import './styles.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js';
import ClassList from './ClassList.js';

{/* <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div> */}


const AttributesSideBar = () => {
    const [strengthNum, setStregthNum] = React.useState(0);
    const [dexterityNum, setDexterityNum] = React.useState(0);
    const [constitutionNum, setConstitutionNum] = React.useState(0);
    const [intelligenceNum, setIntelligenceNum] = React.useState(0);
    const [wisdomNum, setWisdomNum] = React.useState(0);
    const [charismaNum, setCharismaNum] = React.useState(0);
    const arrAttributes = [strengthNum, dexterityNum, constitutionNum, intelligenceNum, wisdomNum, charismaNum];
    const arrAttrSetters = [setStregthNum, setDexterityNum, setConstitutionNum, setIntelligenceNum, setWisdomNum, setCharismaNum];

    function handleIncAttr(index){
        const attr = ATTRIBUTE_LIST[index];
        const func = arrAttrSetters[index];
        func((currVal)=>currVal+=1);
        console.log(`Increased ${attr} by 1`);
    }

    function handleDecAttr(index){
        const attr = ATTRIBUTE_LIST[index];
        const func = arrAttrSetters[index];
        func((currVal)=>currVal-=1);
        console.log(`Decreased ${attr} by 1`);
    }

    return (
        <div className='container-body'>
            <div className='container-attributes'>
                <h1>Attributes</h1>
                <div className='container-attributes-control'>
                    {
                        ATTRIBUTE_LIST.map((attr, index)=>{
                            return (
                                <div>
                                {attr}: { 
                                    arrAttributes[index]
                                }
                                <button onClick={()=>handleIncAttr(index)}>+</button>
                                <button onClick={()=>handleDecAttr(index)}>-</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <ClassList attributes={arrAttributes} />
        </div>
    )
}

export default AttributesSideBar