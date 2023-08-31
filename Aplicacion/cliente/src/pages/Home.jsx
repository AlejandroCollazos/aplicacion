import { Link } from "react-router-dom"
import '../App.css'
import React, {useState} from "react"

function Home() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <div className="row">
          <div className="app">
          <h1>Registro de Usuarios</h1>
          <div className="form">
            <input className="col-10"
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
            <input className="col-10 mt-3 "
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            <input className="col-10 mt-3"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <Link to={'/Registro'} ><button class="btn btn-primary col-10 mt-3">Register</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home