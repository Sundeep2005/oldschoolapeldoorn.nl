import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DonateModal from './components/DonateModal'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import ActivitiesPage from './pages/ActivitiesPage'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function App() {
  const location = useLocation()
  const [donateOpen, setDonateOpen] = useState(false)
  const openDonate = () => setDonateOpen(true)
  const closeDonate = () => setDonateOpen(false)

  return (
    <>
      <ScrollToTop />
      <Header onOpenDonate={openDonate} />
      <main>
        <div className="route-transition" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage onOpenDonate={openDonate} />} />
            <Route path="/buurthuis" element={<DetailPage type="buurthuis" onOpenDonate={openDonate} />} />
            <Route path="/zorgboerderij" element={<DetailPage type="zorgboerderij" onOpenDonate={openDonate} />} />
            <Route path="/huiskamer" element={<DetailPage type="huiskamer" onOpenDonate={openDonate} />} />
            <Route path="/activiteiten" element={<ActivitiesPage onOpenDonate={openDonate} />} />
            <Route path="/over-old-school-apeldoorn" element={<AboutPage onOpenDonate={openDonate} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <DonateModal open={donateOpen} onClose={closeDonate} />
    </>
  )
}
