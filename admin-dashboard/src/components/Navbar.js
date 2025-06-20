import img from '../assets/f2.png';
import { Link, useNavigate } from 'react-router-dom';

function Navbar(props) {
    const navigate = useNavigate()
    let isLoggedIn = props.isLoggedIn;
    async function handleLogOut(){
        await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        credentials: "include"
        });
        props.setIsLoggedin(false);
        navigate("/login");
    }
    return (
        <div className='bg-gray-900 text-white flex justify-between items-center px-8 py-4 shadow-md'>
            <Link to='/'>
                <img src={img} alt="logo" width={160} height={15} loading='lazy' />
            </Link>

            <nav>
                <ul className='flex gap-6 text-lg'>
                    <li>
                        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-4'>
                {!isLoggedIn && (
                    <>
                        <Link to="/login">
                            <button className="border border-gray-600 text-white px-4 py-1 rounded-md hover:bg-gray-800 transition-colors">
                                Log in
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="border border-gray-600 text-white px-4 py-1 rounded-md hover:bg-gray-800 transition-colors">
                                Sign up
                            </button>
                        </Link>
                    </>
                )}

                {isLoggedIn && (
                    <>
                        
                            <button
                                onClick={handleLogOut}
                                className="border border-gray-600 text-white px-4 py-1 rounded-md hover:bg-gray-800 transition-colors"
                            >
                                Log Out
                            </button>
                        <Link to="/dashboard">
                            <button className="border border-gray-600 text-white px-4 py-1 rounded-md hover:bg-gray-800 transition-colors">
                                Dashboard
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
