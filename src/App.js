import React, { Children, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";



import LoginPage from "./Componentes/LoginPage/LoginPage";
import SingupPage from "./Componentes/LoginPage/SingupPage";

function App() {

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading"> Carregando..</div>
    }

    if (!authenticated) {
      return <Navigate to='/Login' />;
    } else {
      return <Navigate to='/' />
    }

    return Children

  }


  return (


    <div className="App">
      <Router>
        <AuthProvider>



          <Routes>
            <Route exact path="/Login" element={<LoginPage />} />
          </Routes>

        </AuthProvider>

      </Router>

    </div>


  );
}

export default App;

