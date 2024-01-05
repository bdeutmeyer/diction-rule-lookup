import letters from '../data/letters'


export default function LetterList({ handleLetterChange }) {
    return (
        <>
            <ul>
                {letters.map((l) => (
                    <div key={l.key}>
                        <button value={l.letter} onClick={handleLetterChange}>
                            {l.letter}
                        </button>
                    </div>
                ))}
            </ul>
        </>
    )
}