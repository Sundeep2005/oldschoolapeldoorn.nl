import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ContactFooter from '../components/ContactFooter'
import HomeCard from '../components/HomeCard'
import MissionSection from '../components/MissionSection'
import SupportBand from '../components/SupportBand'
import { places } from '../data/siteData'
import { publicPath } from '../utils/publicPath'

export default function HomePage({ onOpenDonate }) {
  return (
    <>
      <section className="hero-grid page-reveal px-5 pb-14 pt-4 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="animate-rise font-display max-w-2xl text-5xl font-bold leading-[0.93] text-[#191b17] sm:text-6xl lg:text-7xl">
              Samen leven.
              <br />
              Samen doen.
            </h1>
            <p className="animate-rise animation-delay-1 mt-7 max-w-xl text-base leading-8 text-[#33352f] sm:text-lg">
              Old School is een plek in Apeldoorn waar mensen samen wonen, elkaar ontmoeten en naar elkaar omzien. Met een
              buurthuis, zorgboerderij en huiskamer organiseren we activiteiten voor jong en oud.
            </p>
            <div className="animate-rise animation-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="concept-button concept-button-primary" to="/over-old-school-apeldoorn">
                Kom langs <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link className="concept-button concept-button-secondary" to="/activiteiten">
                Bekijk activiteiten <CalendarDaysIcon className="h-4 w-4" />
              </Link>
            </div>
            <blockquote className="animate-rise animation-delay-3 mt-10 max-w-lg">
              <p className="quote-text">“Old School is een plek waar ik graag kom. Ik voel daar warmte en liefde voor de ander.”</p>
              <footer className="mt-3 text-sm font-semibold text-[#44483f]">- Gerard, wijkbewoner</footer>
            </blockquote>
          </div>
          <div className="animate-soft-in animation-delay-2 relative">
            <img className="hero-blob" src={publicPath('assets/hero-old-school.jpg')} alt="Het gebouw en de tuin van Old School Apeldoorn" />
            <div className="leaf-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>
      <section className="wave-section px-5 pb-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {places.map((place) => (
            <HomeCard place={place} key={place.slug} />
          ))}
          <HomeCard
            place={{
              slug: 'activiteiten',
              title: 'Activiteiten',
              teaser: 'Elke week iets te doen.',
              image: publicPath('assets/activiteiten.jpeg'),
              icon: faCalendarDays,
              ctaPath: '/activiteiten',
            }}
          />
        </div>
      </section>
      <MissionSection />
      <SupportBand onOpenDonate={onOpenDonate} />
      <ContactFooter onOpenDonate={onOpenDonate} />
    </>
  )
}
