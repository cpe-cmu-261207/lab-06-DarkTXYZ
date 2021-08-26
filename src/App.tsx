import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current';
import History from './components/History';
import SubHistory from './components/SubHistory';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/current'>
          <Current />
        </Route>
        <Route path='/history/select'>
          <History />
        </Route>
        <Route path='/history/result'>
          <SubHistory />
        </Route>
        <Route path='/about'>
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>About me</p>
            <p className='text-xl'>Pawaret Dilokwuttisit 630610748</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
