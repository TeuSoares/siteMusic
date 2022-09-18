import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './index.css';

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import PainelControl from "./components/pages/PainelControl";
import InsertMusic from "./components/pages/InsertMusic";
import GerenciarMusic from "./components/pages/GerenciarMusic";
import PrivateUserTrue from "./components/authenticated/PrivateUserTrue";
import PrivateUserFalse from "./components/authenticated/PrivateUserFalse";

import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route 
            path="/login" 
            element={
              <PrivateUserFalse>
                <Login />
              </PrivateUserFalse>
            } 
          />
          <Route 
            path="/cadastro" 
            element={
              <PrivateUserFalse>
                <Cadastro />
              </PrivateUserFalse>
            } 
          />
          <Route 
            path="/painelControl" 
            element={
              <PrivateUserTrue>
                <PainelControl />
              </PrivateUserTrue>
            } 
          />
          <Route 
            path="/insertMusic" 
            element={
              <PrivateUserTrue>
                <InsertMusic />
              </PrivateUserTrue>
            } 
          />
          <Route 
            path="/admMusic" 
            element={
              <PrivateUserTrue>
                <GerenciarMusic /> 
              </PrivateUserTrue>
            } 
          />
        </Routes>
      </Router>  
    </AuthContextProvider>     
  );
}

export default App