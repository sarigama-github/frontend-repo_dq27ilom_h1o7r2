import React from 'react'

function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="ansok">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Låt oss göra en snabb nulägesanalys av ditt bolag
        </h2>
        <p className="mt-6 text-slate-700">
          Samtalet är kort och selektivt. Vi ser om ditt bolag är rätt match för vår metod. Om svaret är ja får du en konkret plan och ett tydligt nästa steg.
        </p>
        <div className="mt-8">
          <a href="https://cal.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-8 py-4 text-base font-semibold hover:bg-slate-800 transition">
            Boka samtalet
          </a>
          <p className="mt-4 text-sm text-slate-600">Boka ett kort samtal för att se om vi kan hjälpa ditt företag växa</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
