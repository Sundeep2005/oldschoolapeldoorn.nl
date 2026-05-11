import { Bars3Icon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../data/siteData'
import { publicPath } from '../utils/publicPath'

export default function Header({ onOpenDonate }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Old School Apeldoorn home">
          <img className="h-20 w-20 object-contain sm:h-24 sm:w-24" src={publicPath('assets/logo-old-school.png')} alt="Old School Apeldoorn" />
        </Link>
        <nav className="hidden items-center gap-8 text-[0.72rem] font-extrabold uppercase text-[#1f211d] lg:flex" aria-label="Hoofdmenu">
          {navItems.map((item) => (
            <NavLink className="nav-link" to={item.path} key={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="hidden items-center gap-2 rounded-full bg-[#bf6047] px-5 py-3 text-xs font-extrabold uppercase text-white shadow-lg shadow-[#bf6047]/20 transition hover:bg-[#954633] lg:flex"
          type="button"
          onClick={onOpenDonate}
        >
          <HeartIcon className="h-4 w-4" /> Doneren
        </button>
        <button
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-[#1f211d] lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu openen"
          aria-expanded={open}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-black/10 bg-[#fffdf7] px-5 py-4 lg:hidden" aria-label="Mobiel menu">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink className="rounded-full px-4 py-3 text-sm font-bold text-[#1f211d] hover:bg-[#eef1e8]" to={item.path} key={item.path}>
                {item.label}
              </NavLink>
            ))}
            <button className="rounded-full bg-[#bf6047] px-4 py-3 text-sm font-extrabold text-white" type="button" onClick={onOpenDonate}>
              Doneren
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
