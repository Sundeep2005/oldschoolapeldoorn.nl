import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function PhotoGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [closing, setClosing] = useState(false)
  const [direction, setDirection] = useState('next')

  const hasImages = images.length > 0
  const activeImage = activeIndex === null ? null : images[activeIndex]

  const openPreview = (index) => {
    setDirection('next')
    setClosing(false)
    setActiveIndex(index)
  }

  const closePreview = () => {
    if (closing) return
    setClosing(true)
    window.setTimeout(() => {
      setActiveIndex(null)
      setClosing(false)
    }, 220)
  }

  const showPrevious = () => {
    setDirection('previous')
    setActiveIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length))
  }

  const showNext = () => {
    setDirection('next')
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length))
  }

  useEffect(() => {
    if (activeIndex === null) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closePreview()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, images.length])

  if (!hasImages) return null

  const lightbox = activeImage ? (
    <div
      className={`lightbox-backdrop ${closing ? 'is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Foto preview"
      onClick={closePreview}
    >
      <button className="lightbox-close" type="button" onClick={closePreview} aria-label="Sluiten">
        <XMarkIcon className="h-6 w-6" />
      </button>

      <button
        className="lightbox-control lightbox-control-left"
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          showPrevious()
        }}
        aria-label="Vorige foto"
      >
        <ChevronLeftIcon className="h-7 w-7" />
      </button>

      <figure className={`lightbox-figure ${closing ? 'is-closing' : ''}`} onClick={(event) => event.stopPropagation()}>
        <img className={`lightbox-image slide-${direction}`} key={activeImage} src={activeImage} alt="" />
        <figcaption>
          {activeIndex + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        className="lightbox-control lightbox-control-right"
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          showNext()
        }}
        aria-label="Volgende foto"
      >
        <ChevronRightIcon className="h-7 w-7" />
      </button>
    </div>
  ) : null

  return (
    <section className="px-5 pb-12 pt-2 lg:px-8 lg:pb-18">
      <div className="mx-auto max-w-7xl">
        <div className="gallery-grid grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((image, index) => (
            <button
              className="image-frame gallery-card block overflow-hidden rounded-[1.1rem] p-1.5 text-left"
              key={`${image}-${index}`}
              type="button"
              onClick={() => openPreview(index)}
              aria-label={`Bekijk foto ${index + 1} groter`}
            >
              <img className="aspect-[4/3] w-full rounded-[0.85rem] object-cover" src={image} alt="" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && createPortal(lightbox, document.body)}
    </section>
  )
}
