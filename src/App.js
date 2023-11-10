import React from 'react'
import NavBar from './component/NavBar'
import Header from './component/Header'
//import About from './component/About'
//import TeamList from './component/TeamList'
//import KitSearch from './component/KitSearch'
import TeamCollection from './component/TeamCollection'
import Footer from './component/Footer'
import './App.css'
export default function App() {
  return (
    <div>
<NavBar />
<Header />

<TeamCollection />

<Footer />
    </div>
  )
}
