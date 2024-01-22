export default function SubList({ currentLetter, ruleSet, subArray, handleSubChange }) {

    // Extracts appropriate subcategories based on primary letter
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
        <div className="container-fluid flex justify-center">
            {ruleSet && subArray ? subArray.map(subs => (
            <button key={subs.key} value={subs.sub} onClick={handleSubChange} className='text-zinc-100 bg-zinc-700 m-3'>{subs.sub}</button>
        )) : <></> }
        </div>
    )
}