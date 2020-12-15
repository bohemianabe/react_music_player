import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    return(
        <nav>
            <Link to='/'> 
            <h1>Waves</h1>
            </Link>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;