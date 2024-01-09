export default function RuleCard({ currentSub, subArray }) {
    const selectedRules = subArray.find((index) => index.sub == currentSub)
    
    return (
        <>
        <h4>Rule Card</h4>
        {selectedRules ? selectedRules.rules.map(rules => (
            <div key={rules.key}>{rules.rule}</div>
        )) : <div></div>}
        </>
    )
}