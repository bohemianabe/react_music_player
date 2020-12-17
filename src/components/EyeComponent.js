import {Link} from 'react-router-dom'

const EyeComponent = ({ eyeStatus }) => {
    return(
        <div className='eye'>
            <Link to='/SecretPlayer' > 
            <img className={`${eyeStatus ? 'active-eye' : ''}`} src={`${process.env.PUBLIC_URL}/siteImages/eyeBall.png`} alt="secret eye"/>
            </Link>
        </div>
    )
}

export default EyeComponent;