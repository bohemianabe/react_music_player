import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Nav = ({ libraryStatus, setLibraryStatus, eyeStatus, setEyeStatus }) => {
    return(
        <nav>
            <Link to='/' style={{ textDecoration: 'none'}}> 
            <h1>Waves</h1>
            </Link>
            <button onClick={() => setLibraryStatus(!libraryStatus)}
            onMouseEnter={() => setEyeStatus(!eyeStatus)}
            onMouseLeave={() => setEyeStatus(!eyeStatus)}
            >
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;