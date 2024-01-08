import { useState } from 'react'
import frenchRules from '../data/frenchRules'
import germanRules from '../data/germanRules'
import italianRules from '../data/italianRules'

export default function SubList({ currentLanguage, currentLetter, subArray, handleSubChange }) {
    let ruleSet;
    switch (currentLanguage) {
        case 'french':
            ruleSet = frenchRules;
            break;
        case 'german':
            ruleSet = germanRules;
            break;
        case 'italian':
            ruleSet = italianRules;
            break;
    }

    if (ruleSet) {
        for (let i = 0; i < ruleSet.length; i++) {
            if (currentLetter == ruleSet[i].primary) {
                const findDuplicates = subArray.some(rule => rule.key === ruleSet[i].key)
                if (!findDuplicates) {
                    subArray.push(ruleSet[i])
                }

            }
        }
        console.log(subArray)
    }



    return (
        <>
        <h4>{currentLetter}</h4>
        {ruleSet && subArray ? subArray.map(subs => (
            <button key={subs.key} value={subs.sub} onClick={handleSubChange}>{subs.sub}</button>
        )) : <div></div> }
        </>
    )
}