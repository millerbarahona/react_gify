import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export  function useGifs({keyword} = {keyword: null}) {
  const [loading, setLoading] = useState(false);
  const {gifs, setGifs} = useContext(GifsContext)

  useEffect(
    function () {
      setLoading(true);
      //recuperamos la keyword del localstorage
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
      
      getGifs({ keyword: keywordToUse}).then((gifs) => {
        setGifs(gifs); //se guardan los gifs en el contexto
        setLoading(false);
        //guardamos la keyword en el localstorage
        if(keyword) localStorage.setItem('lastKeyword', keyword)
      });
    },[keyword, setGifs]
  )
  return {loading, gifs}
}