import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const HelpBar = () => {
    return (
        <div className="mb-2">
            <h3>Having Issues? </h3>
            <Link to="/faq">
                <Button variant="primary" size="lg">
                    Contact Us!
                </Button>{' '}
            </Link>



        </div>
    );
}

export default HelpBar;