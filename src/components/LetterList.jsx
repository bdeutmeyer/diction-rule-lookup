import letters from '../data/letters'

export default function LetterList({ handleLetterChange }) {
    return (
        <>
            <ul className='container flex flex-wrap'>
                {letters.map((l) => (
                    <div key={l.key} className=''>
                        <button value={l.letter} onClick={handleLetterChange} className=''>
                            {l.letter}
                        </button>
                    </div>
                ))}
            </ul>
        </>
    )
}