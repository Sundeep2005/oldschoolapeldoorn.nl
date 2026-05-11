import { EnvelopeIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/outline'
import { publicPath } from '../utils/publicPath'

export default function SupportBand({ onOpenDonate }) {
  return (
    <section className="support-band px-5 py-10 lg:px-8">
      <div className="animate-soft-in mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1px_1fr_260px] lg:items-center">
        <div className="flex gap-5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#71805f] text-white">
            <HeartIcon className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold">Steun ons werk</h2>
            <p className="mt-3 text-sm leading-6 text-[#454940]">
              Met jouw gift help je ons om activiteiten te organiseren en mensen een plek van verbinding te blijven geven.
            </p>
            <button className="concept-button concept-button-primary mt-6" type="button" onClick={onOpenDonate}>
              Ik doneer <HeartIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="hidden h-28 bg-black/20 lg:block" />
        <div className="flex gap-5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#71805f] text-white">
            <UsersIcon className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold">Zelf meehelpen?</h2>
            <p className="mt-3 text-sm leading-6 text-[#454940]">
              Lijkt het jou leuk om mee te helpen met onze activiteiten? Neem contact met ons op.
            </p>
            <a className="concept-button concept-button-secondary mt-6" href="mailto:info@oldschoolapeldoorn.nl?subject=Meehelpen%20bij%20Old%20School">
              Neem contact op <EnvelopeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="polaroid hidden lg:block">
          <img src={publicPath('assets/oldschoolbanner.png')} alt="Vrijwilligers en wijkgenoten bij Old School" />
        </div>
      </div>
    </section>
  )
}
