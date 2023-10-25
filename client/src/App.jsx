import { Route, Routes } from 'react-router-dom'
import "./App.css";
import InitialPage from './components/InitialPage/InitialPage';
import Thanks from './components/Thanks/Thanks';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<InitialPage />} />
          <Route path='/thanks' element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
