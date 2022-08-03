import React, { Children } from 'react'
import useLetras from '../hooks/useLetras'
import Alerta from './Alerta'
import Formulario from './Formulario'
import { Letra } from './Letra'
import { Spinner } from './Spinner'

const AppLetras = () => {

  const { alerta, letra, loading } = useLetras()
  return (
    <>
      <header>Busqueda de letras de canciones</header>

      <Formulario/>
      <main>
        {alerta ? <Alerta>{alerta}</Alerta> : 
        letra ? <Letra/> : 
        loading ? <Spinner/> :
        <p className='text-center'>
          Busca letras de tus artistas favoritos
        </p>}
      </main>
    </>
  )
}

export default AppLetras
