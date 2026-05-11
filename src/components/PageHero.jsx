import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PageHero({ title, subtitle, text, image, icon }) {
  return (
    <section className="page-hero page-reveal px-5 pb-12 pt-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <div className="animate-soft-in mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#71805f] text-white">
            <FontAwesomeIcon icon={icon} className="h-7 w-7" />
          </div>
          <h1 className="animate-rise font-display text-5xl font-bold leading-[0.96] text-[#191b17] sm:text-6xl">{title}</h1>
          <p className="animate-rise animation-delay-1 mt-4 text-sm font-extrabold uppercase tracking-[0.16em] text-[#bf6047]">{subtitle}</p>
          <p className="animate-rise animation-delay-2 mt-7 max-w-2xl text-lg leading-8 text-[#4d5148]">{text}</p>
        </div>
        <div className="animate-soft-in animation-delay-2 image-frame overflow-hidden rounded-[2rem] p-3">
          <img className="aspect-[16/11] w-full rounded-[1.35rem] object-cover" src={image} alt={title} />
        </div>
      </div>
    </section>
  )
}
