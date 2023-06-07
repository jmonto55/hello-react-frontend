import { Route, Routes } from 'react-router';
import './App.css';
import Greeting from './Greeting';

const App = () => (
  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>
);

export default App;
