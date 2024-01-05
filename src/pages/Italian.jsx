import LetterList from "../components/LetterList"
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

export default function Italian() {
    const [currentLetter, handleLetterChange] = useOutletContext();

    return (
        <>
            <h2>Hello Italian</h2>
            <LetterList handleLetterChange={handleLetterChange} />
            <RuleCard currentLetter={currentLetter} />
        </>
    )
}