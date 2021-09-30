import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch,Route } from 'react-router';

const Hats=()=>(
  <div>
    <h1>Hats Pages</h1>
  </div>
)
function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/hats" component={Hats}/>
    </Switch>
    </div>
    
  );
}

export default App;
