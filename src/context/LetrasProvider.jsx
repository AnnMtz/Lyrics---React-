import axios from "axios";
import { useState, createContext } from "react";

const LetrasContext = createContext()

const LetrasProvider = ({children}) => { 

  const [ alerta, setAlerta ] = useState('')
  const [ letra, setLetra ] = useState('')
  const [ loading, setLoading ] = useState(false)

  const busquedaLetra = async busqueda => {
    setLoading(true)
      try {
        const { artista, cancion } = busqueda
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
        const {data} = await axios(url)
        setLetra(data.lyrics)
        setAlerta('')
      } catch (error) {
        setAlerta('Cancion no encontrada')
      }
      setLoading(false)
  }

  return(
    <LetrasContext.Provider
        value={{
          alerta,
          letra,
          loading,
          setAlerta,
          busquedaLetra,
        }}
    >
        {children}
    </LetrasContext.Provider>
  )
}

export {
  LetrasProvider
}

export default LetrasContext