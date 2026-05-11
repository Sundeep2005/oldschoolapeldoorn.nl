import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import ContactFooter from '../components/ContactFooter'
import PageHero from '../components/PageHero'
import SupportBand from '../components/SupportBand'
import { activities } from '../data/siteData'
import { publicPath } from '../utils/publicPath'

export default function ActivitiesPage({ onOpenDonate }) {
  return (
    <>
      <PageHero
        title="Activiteiten"
        subtitle="Elke week iets te doen."
        text="Van kinderfeesten tot buurtrestaurant, van moestuin tot Alpha Cursus: dit zijn de activiteiten die Old School samen met bewoners, vrijwilligers en wijkgenoten vormgeeft."
        image={publicPath('assets/activiteiten.png')}
        icon={faCalendarDays}
      />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity) => (
            <article className="concept-card motion-card overflow-hidden" key={activity.title}>
              <img className="activity-image h-56 w-full object-cover" src={activity.image} alt={activity.title} />
              <div className="p-7">
                <FontAwesomeIcon icon={activity.icon} className="h-9 w-9 text-[#71805f]" />
                <h2 className="font-display mt-6 text-3xl font-semibold">{activity.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#4d5148]">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SupportBand onOpenDonate={onOpenDonate} />
      <ContactFooter onOpenDonate={onOpenDonate} />
    </>
  )
}
