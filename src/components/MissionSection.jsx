import { missionText } from '../data/siteData'

export default function MissionSection() {
  return (
    <section className="mission-section px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mission-panel animate-soft-in">
          <div className="mission-heading">
            <span className="mission-dot" aria-hidden="true" />
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#bf6047]">Doelstelling</p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-[#191b17] sm:text-4xl">
                Verbinding voor Apeldoorn Zuid.
              </h2>
            </div>
          </div>
          <p className="mission-copy">{missionText}</p>
        </div>
      </div>
    </section>
  )
}
