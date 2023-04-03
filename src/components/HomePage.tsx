import React from 'react'
import Header from './Layout/Header'
import Hero from './Layout/Hero'
import AboutPage from './Layout/About'
import Services from './Layout/Services'
import Counter from './Layout/Counter'
import Testimonials from './Layout/Testimonials'
import Blog from './Layout/Blog'
import Contact from './Layout/Contact'
import Footer from './Layout/Footer'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutPage/>
      <Services/>
      <Counter/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage;