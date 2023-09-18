import logo from './logo.svg';
import './App.css';
import Admin from './components/admin/Admin';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
<div className="App">
     <Admin/>
    </div>
    </Provider>
    
  );
}

export default App;
