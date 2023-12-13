import React, { Children, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";

import { Anuncios } from "./pages/Anuncios/Anuncios";
import { ImovelPage } from "./pages/ProductPage/ImovelPage";
import { Layout } from "./shared/components/Layout";
import SingnupPage from "./pages/Autenticacao/SingnupPage";
import LoginPage from "./pages/Autenticacao/LoginPage";
import { AutenticacaoBase } from "./pages/Autenticacao/AutenticacaoBase";
import { UserAnuncios } from "./pages/Anuncios/UserAnuncios";
import { Sobre } from "./pages/Sobre/Sobre";

function App() {

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading"> Carregando..</div>
    }

    if (!authenticated) {
      return <Navigate to='/Login' />;
    } else {
      return <Navigate to='/anuncios' />
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
              <Route element={<AutenticacaoBase/>}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SingnupPage />} />
              </Route>

              <Route path="/anuncios" element={<Anuncios/>}/>

              <Route path="/sobre" element={<Sobre/>}/>

              <Route path="/user/anuncios" element={<UserAnuncios/>} />
              
              <Route path="/imovel" element={<ImovelPage />} />
            </Route>
            
          </Routes>

        </AuthProvider>

      </Router>

    </div>


  );
}

export default App;

