export default function SubList({ currentLetter, ruleSet, subArray, handleSubChange }) {

    if (ruleSet) {
        for (let i = 0; i < ruleSet.length; i++) {
            if (currentLetter == ruleSet[i].primary) {
                const findDuplicates = subArray.some(rule => rule.key === ruleSet[i].key)
                if (!findDuplicates) {
                    subArray.push(ruleSet[i])
                }
            }
        }
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