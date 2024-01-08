import { Link } from 'react-router-dom';

export default function Navbar ({ setCurrentLanguage }) {

    return (
        <>
            <Link key={1} to="/french" onClick={() => {setCurrentLanguage('french')}}>
            French
            </Link>
            <Link key={2} to="/german" value="German" onClick={() => {setCurrentLanguage('german')}}>
            German
            </Link>
            <Link key={3} to="/italian" value="Italian" onClick={() => {setCurrentLanguage('italian')}}>
            Italian
            </Link>
        </>
    )
}