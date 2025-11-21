import React from 'react'

function Offer() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="erbjudande">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Produktifierad rådgivning för ägarledda bolag
            </h2>
            <p className="mt-6 text-slate-700">
              Vi erbjuder affärsutveckling, organisationsutveckling och ledarskapsutveckling i en sammanhållen metod. Allt dokumenteras i MOS Management Operations System så att du vet vad du ska göra och när det ska göras.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <p className="text-sm text-slate-500">Del 1</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Nulägesanalys</h3>
                <p className="mt-2 text-slate-700">Vi identifierar vad som måste göras och i vilken ordning.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <p className="text-sm text-slate-500">Del 2</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Plan</h3>
                <p className="mt-2 text-slate-700">En konkret plan som ger fokus och fart.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <p className="text-sm text-slate-500">Del 3</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Implementering</h3>
                <p className="mt-2 text-slate-700">Vi följer med hela vägen tills resultatet sitter.</p>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <p className="text-slate-800">Du ska inte bygga båten medan du seglar. Bygg rätt båt först och segla sedan.
              </p>
              <a href="#ansok" className="hidden sm:inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2 font-semibold hover:bg-slate-800 transition">Boka samtalet</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
