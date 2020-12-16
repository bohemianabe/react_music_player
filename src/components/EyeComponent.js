import {Link} from 'react-router-dom'

const EyeComponent = ({ eyeStatus}) => {
    return(
        <div className={`eye ${eyeStatus ? 'active-eye' : ''}`}>
            <Link to='/SecretPlayer' > 
            <img src={`${process.env.PUBLIC_URL}/siteImages/eyeBall.png`} alt="secret eye"/>
            </Link>
        </div>
    )
}

export default EyeComponent;