import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import ContactFooter from '../components/ContactFooter'
import PageHero from '../components/PageHero'
import PhotoGallery from '../components/PhotoGallery'
import SupportBand from '../components/SupportBand'
import { places } from '../data/siteData'

export default function DetailPage({ type, onOpenDonate }) {
  const place = places.find((item) => item.slug === type)

  return (
    <>
      <PageHero title={place.title} subtitle={place.teaser} text={place.intro} image={place.image} icon={place.icon} />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold">Wat je hier vindt</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d5148]">
              Old School is niet zomaar een gebouw, maar een plek waar dagelijks leven en aandacht voor de wijk door elkaar
              heen lopen.
            </p>
            {place.ctaPath.startsWith('/') ? (
              <Link className="concept-button concept-button-primary mt-8" to={place.ctaPath}>
                {place.cta} <ArrowRightIcon className="h-4 w-4" />
              </Link>
            ) : (
              <a className="concept-button concept-button-primary mt-8" href={place.ctaPath}>
                {place.cta} <ArrowRightIcon className="h-4 w-4" />
              </a>
            )}
          </div>
          <div className="grid gap-4">
            {place.details.map((detail) => (
              <div className="detail-card rounded-3xl border border-black/10 bg-white/75 p-6 shadow-sm" key={detail}>
                <p className="text-lg font-semibold leading-8 text-[#272a24]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PhotoGallery images={place.gallery} />
      <SupportBand onOpenDonate={onOpenDonate} />
      <ContactFooter onOpenDonate={onOpenDonate} />
    </>
  )
}
