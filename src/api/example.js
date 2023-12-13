import NavBar from "./Componentes/NavBar/NavBar";
import { environment } from "../environments/environment";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Example() {
  const [token, setToken] = useState();

  const login = () => {
    const uri = [environment.bffUrl, environment.endpoints.login].join("");
    const body = {
      login: "gustavo.maturana@desktop.net.br",
      senha: "202519",
    };
    const opts = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(uri, opts, body)
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <NavBar></NavBar>
      <button onClick={login}></button>
      <p>{token}</p>
    </div>
  );
}

export default Example;