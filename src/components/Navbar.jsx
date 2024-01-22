import { Link } from 'react-router-dom';

export default function Navbar ({ handleLangChange }) {

    return (
        // Displays language choices
        <div className="bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 text-center text-zinc-100 p-1">
            <Link key={1} to="/french" value="french" onClick={() => {handleLangChange()}} className="pt-2 pb-2 pr-4 pl-4 text-lg">
            French
            </Link>
            <Link key={2} to="/german" value="german" onClick={() => {handleLangChange()}} className="pt-2 pb-2 pr-4 pl-4 text-lg">
            German
            </Link>
            <Link key={3} to="/italian" value="italian" onClick={() => {handleLangChange()}} className="pt-2 pb-2 pr-4 pl-4 text-lg">
            Italian
            </Link>
        </div>
    )
}