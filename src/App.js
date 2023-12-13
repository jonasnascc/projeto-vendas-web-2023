import React, { Children, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";



import LoginPage from "./Componentes/LoginPage/LoginPage";
import SingupPage from "./Componentes/LoginPage/SingupPage";
import { Anuncios } from "./pages/Anuncios/Anuncios";
import { ImovelPage } from "./pages/ProductPage/ImovelPage";
import { Layout } from "./shared/components/Layout";

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
            <Route path="/" element={<Layout/>}>
              <Route index element={<LoginPage />} /> 
              <Route path="/login" element={<LoginPage />} />
              <Route path="/anuncios" element={<Anuncios/>} />
              <Route path="/imovel" element={<ImovelPage />} />
            </Route>
            
          </Routes>

        </AuthProvider>

      </Router>

    </div>


  );
}

export default App;

