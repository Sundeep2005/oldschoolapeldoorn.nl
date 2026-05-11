import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function HomeCard({ place }) {
  return (
    <article className="concept-card home-card motion-card">
      <img className="h-44 w-full object-cover" src={place.image} alt={place.title} />
      <div className="-mt-7 flex justify-center">
        <div className="grid h-14 w-14 place-items-center rounded-full border-4 border-[#fffdf7] bg-[#71805f] text-white">
          <FontAwesomeIcon icon={place.icon} className="h-6 w-6" />
        </div>
      </div>
      <div className="px-5 pb-6 pt-3 text-center">
        <h2 className="font-display text-3xl font-semibold text-[#1f211d]">{place.title}</h2>
        <p className="mt-3 min-h-14 text-sm leading-6 text-[#44483f]">{place.teaser}</p>
        <Link className="mt-5 inline-flex items-center gap-2 border-b border-[#71805f] pb-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[#4d5f3c]" to={place.ctaPath ?? `/${place.slug}`}>
          Meer weten <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
