import { createContext, useState,useEffect } from "react"



export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
  const[auth, setAuth] = useState({});
  return(
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
  )
}

// const navigate = useNavigate();

//   const [user,setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//       const recoveredUser = localStorage.getItem("user");
//       if(recoveredUser){
//           setUser(JSON.parse(recoveredUser))
//       }

//       setLoading(false)
//   }, []);

//   const login = (email, password) => {

//   console.log("login auth", {email, password});

//   const loggedUser ={
//     id:"123",
//     email,
//   };

//   localStorage.setItem("user", JSON.stringify(loggedUser));

//   if(password ==="123"){
//       setUser(loggedUser);
//       navigate("/")

//   }

//   };

//   const logout = () => {
//     console.log("logout");
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate('/Login')
//   }
