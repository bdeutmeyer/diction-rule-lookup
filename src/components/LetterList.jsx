const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function LetterList() {
    return (
        <>
        <ul>
            {letters.map((letter) => letter)}
        </ul>
        </>
    )
}