import React, { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ["Avengers", "Chile", "Colombia", "Ecuador","Morty"]

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const {loading, gifs} = useGifs({keyword})

  const hanldeSubmit = evt =>{
    //navegar a otra ruta
    evt.preventDefault()
    console.log(keyword)
    pushLocation(`/search/${keyword}`)
  }
  const handleChange = evt => {
    setKeyword(evt.target.value)
  }
  return (
    <>
      <form onSubmit= {hanldeSubmit}>
        <input onChange={handleChange} type='text' value={keyword} placeholder='Ingresa nombre del gif'/>
      </form>
      <h3 className="App-title">Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gs más populares</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}