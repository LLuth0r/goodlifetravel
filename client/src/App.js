// DEPENDENCIES
import {Switch, Route} from 'react-router-dom'

// COMPONENTS
import Layout from '../src/layouts/Layout'
import MainContainer from '../src/containers/MainContainer'

// STYLES
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        {/* LOGIN */}
        <Route path='/login'>
          
        </Route>

        {/* REGISTER */}
        <Route path='/register'>

        </Route>

        {/* LANDING */}
        <Route path='/'>
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
