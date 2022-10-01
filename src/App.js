import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Score from './Components/Score/Score';
import Success from './Components/Success/Success';
import { MainProvider } from './Context/Context';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path='score' element={<Score/>} />
            <Route path='success' element={<Success/>} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <MainProvider>
        <Layout />
      </MainProvider>
    </>
  );
}

export default App;
