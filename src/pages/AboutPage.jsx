import ContactFooter from '../components/ContactFooter'
import MissionSection from '../components/MissionSection'
import PhotoGallery from '../components/PhotoGallery'
import SupportBand from '../components/SupportBand'
import { impressionImages } from '../data/siteData'
import { publicPath } from '../utils/publicPath'

const aboutImages = [
  publicPath('assets/hero-old-school.jpg'),
  publicPath('assets/kinderfeest.jpg'),
  publicPath('assets/buurtborrel.jpg'),
  publicPath('assets/activiteiten.jpeg'),
  publicPath('assets/huiskamer.jpeg'),
  publicPath('assets/zorgboerderij.jpeg'),
]

export default function AboutPage({ onOpenDonate }) {
  return (
    <>
      <section className="page-hero page-reveal px-5 pb-12 pt-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="animate-rise animation-delay-1 font-display mt-4 text-5xl font-bold leading-[0.96] text-[#191b17] sm:text-6xl">
              Over Old School Apeldoorn
            </h1>
            <p className="animate-rise animation-delay-2 mt-7 max-w-2xl text-lg leading-8 text-[#4d5148]">
              Old School Apeldoorn is opgericht op 8 november 2016 vanuit de droom van Jurrien en Janet ten Brinke om een oude school om te vormen tot een warme ontmoetingsplek voor de wijk.
Bij Old School Apeldoorn draait het om ontmoeting, verbinding en gezelligheid. Met hulp van vrijwilligers worden er activiteiten georganiseerd voor jong en oud, zodat mensen elkaar kunnen ontmoeten, zich welkom voelen en samen kunnen bouwen aan een betrokken wijk in Apeldoorn-Zuid.
            </p>
          </div>
          <div className="animate-soft-in animation-delay-2 image-frame overflow-hidden rounded-[2rem] p-3">
            <img className="aspect-[16/11] w-full rounded-[1.35rem] object-cover" src={publicPath('assets/hero-old-school.jpg')} alt="Old School Apeldoorn" />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="image-frame overflow-hidden rounded-[1.5rem] p-2">
            <img className="aspect-[4/3] w-full rounded-[1rem] object-cover" src={publicPath('assets/tenbrinke.jpg')} alt="Ontmoeting bij Old School Apeldoorn" />
          </div>
          <div>
            <h2 className="font-display text-4xl font-semibold text-[#191b17]">wie zijn wij?</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d5148]">
              Wij zijn familie ten Brinke en wonen en werken in een oude school in Apeldoorn-Zuid. Op deze bijzondere plek delen wij het leven met medebewoners en mensen uit de buurt.
Vanuit Old School Apeldoorn runnen wij samen met anderen een buurthuis en mini (zorg)boederij. Dit doen wij met veel betrokkenheid, gastvrijheid en een hart voor mensen.
Wij willen een plek creëren waar iedereen welkom is, waar mensen elkaar kunnen ontmoeten en waar we naar elkaar omzien.
            </p>
          </div>
        </div>
      </section>

      <MissionSection />
      <PhotoGallery images={aboutImages.length ? aboutImages : impressionImages.slice(0, 6)} />
      <SupportBand onOpenDonate={onOpenDonate} />
      <ContactFooter onOpenDonate={onOpenDonate} />
    </>
  )
}
