export default function RuleCard({ currentLetter, ruleSet, currentSub, subArray }) {
    const subRules = subArray.find((index) => index.sub == currentSub)
    const primRules = ruleSet.find((index) => index.primary == currentLetter)



    return (
        <>
            {currentSub ? 
            <h4 className="text-center text-xl tenor-sans underline p-2">{currentSub} Rules</h4> : <h4 className="text-center text-xl tenor-sans underline p-2">{currentLetter}</h4>}
            {subRules ? subRules.rules.map(rules => (
                <div key={rules.key} className="mx-3 my-1">{rules.rule}</div>
            )) : primRules.rules.map(rules => (
                <div key={rules.key} className="mx-3 my-1">{rules.rule}</div>
            ))
            }
        </>
    )
}