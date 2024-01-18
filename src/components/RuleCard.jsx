import React from 'react';

export default function RuleCard({ currentLetter, ruleSet, currentSub, subArray }) {
    const subRules = subArray.find((index) => index.sub == currentSub)
    const primRules = ruleSet.find((index) => index.primary == currentLetter)

    // Isolate and italicize code via ChatGPT:
    // Function to italicize based on special markers
    const italicizeText = (text) => {
        // Define the special marker for italicization
        const marker = '@';

        // Split the text into segments based on the marker
        const segments = text.split(marker);

        // Map through the segments and apply styling to alternate segments
        const italicizedText = segments.map((segment, index) => (
            index % 2 === 0 ? (
                // Non-italicized segment
                <span key={index}>{segment}</span>
            ) : (
                // Italicized segment
                <i key={index}>{segment}</i>
            )
        ));

        return italicizedText;
    };

    return (
        <>
            {/* Rules heading */}
            {currentSub ?
                <h4 className="text-center text-xl tenor-sans underline p-2">{currentSub} Rules</h4> :
                <h4 className="text-center text-xl tenor-sans underline p-2">{currentLetter}</h4>}

            {/* Rules table */}
            <table >
                <tr>
                    <th>Condition</th>
                    <th>Pronunciation</th>
                </tr>
                {subRules ?
                    subRules.rules.map(rules => (
                        <tr key={rules.key}>
                            <td>{italicizeText(rules.cond)}</td>
                            <td>{italicizeText(rules.pron)}</td>
                        </tr>
                    
            )) :
                primRules.rules.map(rules => (
                    <tr key={rules.key}>
                    <td>{italicizeText(rules.cond)}</td>
                    <td>{italicizeText(rules.pron)}</td>
                </tr>
            ))
            }
            </table>
        </>
    )
}