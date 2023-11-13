import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
//import About from './component/About'
//import TeamList from './component/TeamList'
import TeamCollection from './TeamCollection'
import Footer from './Footer'
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
