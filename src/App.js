import React from 'react'
import NavBar from './component/NavBar'
import Header from './component/Header'
//import About from './component/About'
//import TeamList from './component/TeamList'
import KitSearch from './component/KitSearch'
import TeamCollection from './component/TeamCollection'
//import CreateTeamForm from './CreateTeamForm'
import Footer from './component/Footer'
import './App.css'
export default function App() {
  return (
    <div>
<NavBar />
<Header />
<KitSearch />
<TeamCollection />

<Footer />
    </div>
  )
}
