import React from 'react'

function Who() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="vem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Är du rätt typ av bolag</h2>
          <p className="mt-6 text-slate-700">Vi arbetar med ägarledda bolag som är lönsamma och vill växa. Ofta omkring femton miljoner eller mer i omsättning och upp till fem anställda. Du har nått en platå och vill ha struktur och fart.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white">
            <p className="text-slate-900 font-semibold">Ni testar mycket men får inte effekt</p>
            <p className="text-slate-700 mt-2">Vi skapar en modell som ger resultat.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white">
            <p className="text-slate-900 font-semibold">Ägaren är flaskhalsen</p>
            <p className="text-slate-700 mt-2">Vi bygger ledarskap och struktur runt dig.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white">
            <p className="text-slate-900 font-semibold">Skulder i organisation och teknik</p>
            <p className="text-slate-700 mt-2">Vi adresserar det som bromsar tillväxten.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white">
            <p className="text-slate-900 font-semibold">Behov av fart och fokus</p>
            <p className="text-slate-700 mt-2">Vi prioriterar hårt och tar bort brus.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white">
            <p className="text-slate-900 font-semibold">Vill göra satsning nu</p>
            <p className="text-slate-700 mt-2">Vi tar ansvar hela vägen till resultat.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white">
            <p className="text-slate-900 font-semibold">Söker en partner som förstår</p>
            <p className="text-slate-700 mt-2">Vi är som du men tio år längre fram.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Who
