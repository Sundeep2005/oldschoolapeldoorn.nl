import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { publicPath } from '../utils/publicPath'

export default function DonateModal({ open, onClose }) {
  const [closing, setClosing] = useState(false)

  const closeWithAnimation = () => {
    setClosing(true)
    window.setTimeout(() => {
      setClosing(false)
      onClose()
    }, 220)
  }

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeWithAnimation()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className={`modal-backdrop ${closing ? 'is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-title"
      onClick={closeWithAnimation}
    >
      <div className={`donate-modal ${closing ? 'is-closing' : ''}`} onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={closeWithAnimation} aria-label="Sluiten">
          <XMarkIcon className="h-5 w-5" />
        </button>
        <div className="donate-grid">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#bf6047]">Doneren</p>
            <h2 id="donate-title" className="font-display mt-3 text-4xl font-semibold text-[#191b17]">
              Overmaken of via Tikkie
            </h2>
            <div className="manual-transfer mt-6">
              <p className="manual-label">Handmatig overmaken</p>
              <dl className="mt-4 grid gap-4 text-sm">
                <TransferLine label="T.a.v." value="Stichting Old School" />
                <TransferLine label="IBAN" value="NL20 TRIO 0338425209" />
                <TransferLine label="Omschrijving" value="Donatie Old School" />
              </dl>
            </div>
          </div>
          <div className="qr-panel">
            <img className="mx-auto w-full max-w-xs rounded-[1.5rem] bg-white p-3 shadow-lg" src={publicPath('assets/buurtrestaurant.jpeg')} alt="Tikkie QR code voor Old School" />
            <a
              className="concept-button concept-button-primary mt-6 w-full sm:w-auto"
              href="https://tikkie.me/pay/OldSchool/r5G4LPjsGdeRjYyCVPNVwT"
              target="_blank"
              rel="noreferrer"
            >
              Open Tikkie <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function TransferLine({ label, value }) {
  return (
    <div className="grid grid-cols-[7.4rem_1fr] gap-3">
      <dt className="font-bold uppercase tracking-[0.08em] text-[#71805f]">{label}</dt>
      <dd className="font-semibold text-[#1f211d]">{value}</dd>
    </div>
  )
}
