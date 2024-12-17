import '../App.css'
import { Routes, Route } from "react-router-dom";
import NavList from '../components/NavList'
import Footer from '../components/Footer'
import Header from '../components/Header';

function Home() {

    return (
      <>
      <Header />
      <NavList />
      <Footer />
      </>
    )
  }
  
  export default Home