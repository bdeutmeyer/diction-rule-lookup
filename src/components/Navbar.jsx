import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <>
            <Link to="/french">
            French
            </Link>
            <Link to="/german">
            German
            </Link>
            <Link to="/italian">
            Italian
            </Link>
        </>
    )
}