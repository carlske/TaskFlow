import './App.css'
import Home from './pages/Home'
import { SEO } from './seo/Seo'

function App() {

  return (
    <>
    <SEO
        title="Inicio | TaskFlow"
        description="Administra tus tareas pendientes y finalizadas"
        keywords="tareas, organizador, productividad"
      />
    <Home></Home>
    </>
  )
}

export default App
