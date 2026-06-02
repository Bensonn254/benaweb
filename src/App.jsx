import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import TopBar from './components/layout/TopBar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import ScrollTopButton from './components/ui/ScrollTopButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Pricing from './pages/Pricing'
import Team from './pages/Team'
import TeamDetails from './pages/TeamDetails'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'

import SEO from './components/SEO'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <TopBar />
      <Header />
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/about"               element={<About />} />
        <Route path="/services"            element={<Services />} />
        <Route path="/services/:slug"      element={<ServiceDetails />} />
        <Route path="/projects"            element={<Projects />} />
        <Route path="/projects/:slug"      element={<ProjectDetails />} />
        <Route path="/pricing"             element={<Pricing />} />
        <Route path="/team"                element={<Team />} />
        <Route path="/team/benard"         element={<TeamDetails />} />
        <Route path="/testimonials"        element={<Testimonials />} />
        <Route path="/contact"             element={<Contact />} />
        <Route path="/blog"                element={<Blog />} />
        <Route path="/blog/:slug"          element={<BlogPost />} />
        <Route path="/faq"                 element={<Faq />} />
        <Route path="*"                    element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
      <ScrollTopButton />
    </>
  )
}
