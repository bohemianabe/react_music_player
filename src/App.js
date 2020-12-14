import MusicPlayer from './pages/MusicPlayer';
import SecretPlayer from './pages/SecretPlayer';
// router
import {Switch, Route} from 'react-router-dom'

function App() {
  return(
    <div>
      <Switch> 
      <Route exact path="/" component={MusicPlayer} />
      <Route exact path="/secretPlayer" component={SecretPlayer} />
      </Switch>
    </div>
  );
};

export default App;
