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
    // Your data here
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
              placeholder='ingrese nombre'
              onchange={(value) => handleInputChange('nombre', value)}
            />
            <Validation
              type={'email'}
              name={'correo'}
              value={data.correo}
              placeholder='ingrese correo'
              onchange={(value) => handleInputChange('correo', value)}
            />
            <Validation
              type={'password'}
              name={'password'}
              value={data.password}
              placeholder='ingrese contraseña'
              onchange={(value) => handleInputChange('password', value)}
            />
            <Validation
              type={'select'}
              name={'descripcion'}
              value={data.descripcion}
              placeholder='seleccione una opción'
              isSelect={false}
              datos={caldo}
              onchange={(value) => handleInputChange('descripcion', value)}
            />
            <button>Iniciar Sesion</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;