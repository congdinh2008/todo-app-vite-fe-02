const Header = () => {
    return (
        <header className="flex justify-between items-center bg-blue-500 text-white">
            <a href="/" className="brand">Todo App</a>
            <nav>
                <ul className="flex justify-center">
                    <li className="nav-item"><a href="" className="nav-link p-4 block hover:bg-blue-700">Home</a></li>
                    <li className="nav-item"><a href="" className="nav-link p-4 block hover:bg-blue-700">About</a></li>
                    <li className="nav-item"><a href="" className="nav-link p-4 block hover:bg-blue-700">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;