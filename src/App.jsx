import React, { useState } from 'react';
import login from './assets/login.svg';
import Validation from './helpers/Validation';

function App() {
  const [data, setData] = useState({
    nombre: '',
    correo: '',
    descripcion: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  let caldo = [
    // Tus datos aquí
  ];
console.log(data)
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <img src={login} alt="" />
        </div>
        <div className="col">
          <h1>Inicio de Sesion</h1>
          <form action="">
            <Validation
              type={'text'}
              name={'nombre'}
              value={data.nombre}
              placeholder='Ingrese nombre'
              onchange={handleInputChange}
            />
            <Validation
              type={'email'}
              name={'correo'}
              value={data.correo}
              placeholder='Ingrese correo'
              onchange={handleInputChange}
            />
            <Validation
              type={'password'}
              name={'password'}
              value={data.password}
              placeholder='Ingrese contraseña'
              onchange={handleInputChange}
            />
            <Validation
              type={'select'}
              name={'descripcion'}
              value={data.descripcion}
              placeholder='Seleccione una opción'
              isSelect={false}
              datos={caldo}
              onchange={handleInputChange}
            />
            <button>Iniciar Sesion</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;