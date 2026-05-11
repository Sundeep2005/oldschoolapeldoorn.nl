import { HomeIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="px-5 py-24 text-center lg:px-8">
      <HomeIcon className="mx-auto h-12 w-12 text-[#71805f]" />
      <h1 className="font-display mt-6 text-5xl font-semibold">Pagina niet gevonden</h1>
      <Link className="concept-button concept-button-primary mt-8" to="/">
        Terug naar home
      </Link>
    </section>
  )
}
