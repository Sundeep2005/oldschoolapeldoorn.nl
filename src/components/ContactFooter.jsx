import { ArrowTopRightOnSquareIcon, EnvelopeIcon, MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ContactLine from './ContactLine'
import { documents, socials } from '../data/siteData'
import { publicPath } from '../utils/publicPath'

export default function ContactFooter({ onOpenDonate }) {
  const [selectedDocument, setSelectedDocument] = useState(null)
  const findDocument = (label) => documents.find((document) => document.label === label)
  const documentGroups = [
    {
      label: 'Beleidsplan',
      links: [{ label: '2025-2027', document: findDocument('Beleidsplan Stichting Old School Apeldoorn 2025-2027') }],
    },
    {
      label: 'Jaarverslag',
      links: [
        { label: '2023', document: findDocument('Jaarverslag 2023') },
        { label: '2024', document: findDocument('Jaarverslag 2024') },
      ],
    },
    {
      label: 'Jaarrekening',
      links: [
        { label: '2023', document: findDocument('Jaarrekening 2023') },
        { label: '2024', document: findDocument('Jaarrekening 2024') },
      ],
    },
    {
      label: 'Publicatieplicht-ANBI',
      links: [
        { label: '2023', document: findDocument('Formulier Publicatieplicht ANBI 2023') },
        { label: '2024', document: findDocument('Formulier Publicatieplicht ANBI 2024') },
      ],
    },
    {
      label: 'Statuten',
      links: [{ label: 'Bekijk', document: findDocument('Statuten Stichting Old School') }],
    },
  ].map((group) => ({ ...group, links: group.links.filter((link) => link.document) }))

  const closeDocument = () => setSelectedDocument(null)

  useEffect(() => {
    if (!selectedDocument) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeDocument()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedDocument])

  const documentModal = selectedDocument ? (
    <div className="document-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="document-modal-title" onClick={closeDocument}>
      <div className="document-modal" onClick={(event) => event.stopPropagation()}>
        <div className="document-modal-header">
          <div>
            <p className="document-modal-kicker">Document</p>
            <h2 id="document-modal-title" className="font-display text-2xl font-semibold text-[#1f211d]">
              {selectedDocument.label}
            </h2>
          </div>
          <div className="document-modal-actions">
            <a className="document-modal-open" href={selectedDocument.href} target="_blank" rel="noreferrer" aria-label={`${selectedDocument.label} openen in nieuw tabblad`}>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <button className="document-modal-close" type="button" onClick={closeDocument} aria-label="Document sluiten">
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="document-modal-viewer">
          <iframe title={selectedDocument.label} src={selectedDocument.href} />
        </div>
      </div>
    </div>
  ) : null

  return (
    <footer className="bg-[#fffdf7] px-5 pt-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-black/10 py-10 md:grid-cols-[0.8fr_1fr_1fr_1fr]">
        <img className="h-36 w-36 object-contain" src={publicPath('assets/logo-old-school.png')} alt="Old School Apeldoorn" />
        <div>
          <h2 className="font-display text-2xl font-semibold">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-[#454940]">
            <ContactLine
              icon={MapPinIcon}
              label="Adres"
              value={
                <a
                  className="contact-link"
                  href="https://www.google.com/maps/search/?api=1&query=Old+School+Apeldoorn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Oude Beekbergerweg 151C
                  <br />
                  7333 AE Apeldoorn
                </a>
              }
            />
            <ContactLine
              icon={EnvelopeIcon}
              label="E-mail"
              value={
                <a className="contact-link" href="mailto:info@oldschoolapeldoorn.nl">
                  info@oldschoolapeldoorn.nl
                </a>
              }
            />
          </div>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                className={`social-link social-link-${social.label.toLowerCase()}`}
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold">Registratie</h2>
          <div className="mt-4 grid gap-3 text-sm text-[#454940]">
            <ContactLine label="RSIN" value="856889386" />
            <ContactLine label="KvK" value="67235794" />
            <ContactLine label="IBAN" value="NL 20 TRIO 0338425209" />
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold">Documenten</h2>
          <div className="footer-documents mt-4">
            {documentGroups.map((group) => (
              <div className="footer-document-row" key={group.label}>
                <span className="footer-document-label">{group.label}</span>
                <span className="footer-document-links">
                  {group.links.map((link) => (
                    <button
                      className="footer-document-pill"
                      key={link.document.label}
                      aria-label={link.document.label}
                      type="button"
                      onClick={() => setSelectedDocument(link.document)}
                    >
                      {link.label}
                    </button>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 py-5 text-xs text-[#454940]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Stichting Old School Apeldoorn</p>
          <button className="footer-donate" type="button" onClick={onOpenDonate}>
            Geld doneren? Dat waarderen we enorm! Klik hier om ons te steunen.
          </button>
        </div>
      </div>
      {documentModal && createPortal(documentModal, window.document.body)}
    </footer>
  )
}
