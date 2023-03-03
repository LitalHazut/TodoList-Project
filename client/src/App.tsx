import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './containers/mainContainer';
import './App.css';
import { TodoContextProvider } from './context/todoContext';
import { AppTitle } from './components/appTitle/appTitle';

function App() {
  return (
    <TodoContextProvider>
      <div className='container App'>
        <AppTitle />
        <Main />
      </div>
    </TodoContextProvider>
  );
}

export default App;
