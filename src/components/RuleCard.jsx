export default function RuleCard({ currentLetter, ruleSet, currentSub, subArray }) {
    const subRules = subArray.find((index) => index.sub == currentSub)
    const primRules = ruleSet.find((index) => index.primary == currentLetter)
    

    
    return (
        <>
        <h4>Rule Card</h4>
        {subRules ? subRules.rules.map(rules => (
            <div key={rules.key}>{rules.rule}</div>
        )) : primRules.rules.map(rules => (
            <div key={rules.key}>{rules.rule}</div>
        ))
        }
        </>
    )
}