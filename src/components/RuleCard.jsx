import React from 'react';

export default function RuleCard({ currentLetter, ruleSet, currentSub, subArray }) {
    const subRules = subArray.find((index) => index.sub == currentSub)
    const primRules = ruleSet.find((index) => index.primary == currentLetter)

    // Isolate and format code adapted from ChatGPT:
    // Function to format based on special markers
    const formatText = (text) => {
        // Define the special marker for italicization
        const italMarker = '@';
        const gentiumMarker = '#';

        // Split the text into segments based on the marker
        const italSegments = text.split(italMarker);

        // Map through the segments and apply styling to alternate segments
        const formattedText = italSegments.map((segment, index) => (
            index % 2 === 0 ? (
                // Non-italicized segment
                <span key={index}>
                    {/* Split the segment based on font marker */}
                    {segment.split(gentiumMarker).map((fontSegment, fontIndex) => (fontIndex % 2 === 0 ? (
                            // Non-font-changed segment
                            <span key={fontIndex}>{fontSegment}</span>
                        ) : (
                            // Font-changed segment
                            <span key={fontIndex} className='gentium'>{fontSegment}</span>
                        )
                    ))}
                </span>
            ) : (
                // Italicized segment
                <i key={index}>{segment}</i>
            )
        ));

        return formattedText;
    };

    return (
        <div className='container-fluid'>
            <div className='flex-col justify-center'>

                {/* Rules heading, displays primary letter or subcategory */}
                {currentSub ?
                    <div className=''>
                        <h4 className="text-center text-xl font-bold underline p-2">{currentSub} Rules</h4>
                        <h5 className="text-center text-lg font-bold  p-2">{formatText(subRules.poss)}</h5>
                    </div>
                    :
                    <div className=''>
                        <h4 className="text-center text-xl font-bold underline p-2">{currentLetter} Rules</h4>
                        <h5 className="text-center text-lg font-bold p-2">{formatText(primRules.poss)}</h5>
                    </div>
                }

                {/* Rules table - conditionally displays either subcategory rules or primary letter rules */}
                <div className='flex justify-center'>
                    <table className='border border-zinc-800 table-auto max-w-3xl mx-2 mb-5'>
                        <thead>
                            <tr>
                                <th className='border border-zinc-800 py-1 px-5 text-start'>Condition</th>
                                <th className='border border-zinc-800 py-1 px-5 text-start'>Pronunciation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subRules ?
                                subRules.rules.map(rules => (
                                    <tr key={rules.key}>
                                        <td className='border border-zinc-800 py-1 px-5 text-wrap'>{formatText(rules.cond)}</td>
                                        <td className='border border-zinc-800 py-1 px-5 text-wrap'>{formatText(rules.pron)}</td>
                                    </tr>

                                )) :
                                primRules.rules.map(rules => (
                                    <tr key={rules.key}>
                                        <td className='border border-zinc-800 py-1 px-5 text-wrap'>{formatText(rules.cond)}</td>
                                        <td className='border border-zinc-800 py-1 px-5 text-wrap'>{formatText(rules.pron)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}