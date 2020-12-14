import {Link} from 'react-router-dom'

const EyeComponent = () => {
    return(
        <div className="eye">
            <Link to="/secretPlayer"> 
            <img src={`${process.env.PUBLIC_URL}/siteImages/eyeBall.png`} alt="secret eye"/>
            </Link>
        </div>
    )
}

export default EyeComponent;