import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-24 bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#e6f0ff_0%,transparent_60%)]"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Tillväxt är ett hantverk
            </h1>
            <p className="mt-6 text-lg text-slate-700 max-w-2xl">
              Select Growth hjälper ägarledda bolag skala med tydliga system, starkt ledarskap och en enkel väg framåt. Mötet är selektivt och för företag som vill gå från intent till resultat.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#ansok" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-base font-semibold hover:bg-slate-800 transition w-full sm:w-auto">
                Boka samtalet
              </a>
              <p className="text-slate-600 text-sm">
                Se om du är rätt typ av bolag för vår metod
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">För ägare av ägare</p>
                <p>Upp till fem anställda och lönsamma med vilja att växa</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Gör rätt från början</p>
                <p>Sluta gå på minor och få en tydlig modell som fungerar</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-sm text-slate-500">Nulägesanalys • 15 eller 30 minuter</p>
                <h3 className="text-2xl font-semibold text-slate-900">Ett kort samtal med Ola</h3>
                <p className="text-slate-700">
                  Vi tittar på ditt bolag och identifierar om vi kan skapa effekt. Om det är rätt match får du en konkret plan och ett tydligt nästa steg.
                </p>
                <ul className="text-slate-700 text-sm list-disc pl-5 space-y-2">
                  <li>Klarsyn kring var du står idag</li>
                  <li>Konkreta nästa steg och prioriteringar</li>
                  <li>Vad som krävs för att nå önskad tillväxt</li>
                </ul>
                <a href="#ansok" className="block text-center rounded-full bg-slate-900 text-white px-6 py-3 text-base font-semibold hover:bg-slate-800 transition">
                  Boka samtalet
                </a>
                <p className="text-xs text-slate-500 text-center">Selektivt möte. Vi prioriterar bolag där vi kan skapa tydlig effekt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
