import React from 'react'
import useLetras from '../hooks/useLetras'
import { Spinner } from './Spinner'

export const Letra = () => {

  const { letra, loading } = useLetras()
  return (
     <div className='letra'>{letra}</div>
  )
}
