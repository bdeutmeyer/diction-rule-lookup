import { Link } from 'react-router-dom';

export default function Navbar ({ setCurrentLanguage }) {

    return (
        <div className="tenor-sans bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 text-center text-zinc-100 p-1">
            <Link key={1} to="/french" onClick={() => {setCurrentLanguage('french')}} className="pt-2 pb-2 pr-4 pl-4 text-lg">
            French
            </Link>
            <Link key={2} to="/german" value="German" onClick={() => {setCurrentLanguage('german')}} className="pt-2 pb-2 pr-4 pl-4 text-lg">
            German
            </Link>
            <Link key={3} to="/italian" value="Italian" onClick={() => {setCurrentLanguage('italian')}} className="pt-2 pb-2 pr-4 pl-4 text-lg">
            Italian
            </Link>
        </div>
    )
}