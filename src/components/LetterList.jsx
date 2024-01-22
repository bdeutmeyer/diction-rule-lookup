import letters from '../data/letters'
import '../App.css'
import '../index.css'

export default function LetterList({ handleLetterChange }) {
    return (
        <>
        {/* Displays alphabetical list when a language is in focus */}
            <ul className='container-fluid flex flex-wrap row justify-between bg-zinc-700 px-3'>
                {letters.map((l) => (
                    <li key={l.key} className='col bg-zinc-700'>
                        <button value={l.letter} onClick={handleLetterChange} className='tenor-sans text-zinc-100'>
                            {l.letter}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}