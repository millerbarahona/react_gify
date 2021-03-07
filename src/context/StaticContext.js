import React from 'react'

const Context = React.createContext({ //esto le asigna un valor por defecto a un contexto si no se tiene permiso de usar el mismo
    name: 'esto/es/sin/provider', //para poder mandar el objeto que se quiera se coloca el provider en la app
})
export default Context