import { Link } from 'react-router-dom';

function Footer() {
    
    return (
       
        <header >
            <div className="container">
                <Link to="/">
                    <p>Stella Mungai &copy; All Rights Reserved </p>
                </Link>
            </div>
        </header>
    )
}

export default Footer;