import React  from 'react'
import { HashRouter as Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
// import BackContent from './assets/image/background.png'

function App(){
  return(
            <Route>
                

                { renderRoutes(routes)}     
             
            </Route>
        )
}
export default App

 