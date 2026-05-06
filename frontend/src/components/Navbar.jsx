import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAdmin(localStorage.getItem("isAdmin") === "true");
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        window.location.href = "/";
    };

    return (
        <nav className="navbar">

            {/* Logo centered */}
            <div className="navbar-logo">
                <svg width="300" height="80" viewBox="0 0 300 80">
                    <path id="curve" d="M 20 60 Q 150 10 280 60" fill="transparent" />

                    <text fill="#f5f5f5" fontSize="30" fontFamily="Playfair Display" letterSpacing="2">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            El Paraiso Hass
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* Links below */}
            <div className="navbar-links">
                <Link to="/">Home</Link> {/*|{" "}*/}
                <Link to="/avocados">Hass avocados</Link> {/*|{" "}*/}
                <Link to="/honey">Raw honey</Link> {/*|{" "}*/}
                <Link to="/coffee">Fresh coffee</Link> |{" "}
                <Link to="/admin">Admin</Link> {/*|{" "}*/}

                {!isAdmin ? (
                    <Link to="/login">Login</Link>
                ) : (
                    <button className='logout-btn' onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

