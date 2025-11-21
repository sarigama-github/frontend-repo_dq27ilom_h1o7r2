import React from 'react'

function Proof() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="story">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Resultat i verkligheten
            </h2>
            <p className="mt-6 text-slate-700">
              Christoffer byggde Svea Pall från noll till hundra miljoner på tjugo månader. Det hände med tydliga system och ett kompromisslöst fokus på genomförande. Ola har gjort samma resa som många ägare. Han vet hur det känns när allt hänger på en person.
            </p>
            <p className="mt-4 text-slate-700">
              Tillsammans kombinerar vi erfarenhet och förståelse som traditionella konsulter saknar.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-3xl font-semibold text-slate-900">100 MSEK</p>
                  <p className="text-sm text-slate-600 mt-1">Omsättning på tjugo månader</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-3xl font-semibold text-slate-900">15+ år</p>
                  <p className="text-sm text-slate-600 mt-1">Verklig erfarenhet som ägare</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-3xl font-semibold text-slate-900">MOS</p>
                  <p className="text-sm text-slate-600 mt-1">Strukturverktyg som ger klarhet</p>
                </div>
              </div>
              <blockquote className="mt-8 text-slate-800 text-lg">
                Sluta jaga allt. Gör rätt sak i rätt ordning och låt systemen bära tillväxten.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proof
