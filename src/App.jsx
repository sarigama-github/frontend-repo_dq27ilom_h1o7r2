import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Proof from './components/Proof'
import Offer from './components/Offer'
import Who from './components/Who'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <Offer />
        <Who />
        <CTA />
      </main>
      <footer className="pb-12 pt-8 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">Select Growth. Tillväxt med system och ledarskap.</p>
            <a href="#ansok" className="inline-flex items-center rounded-full bg-slate-900 text-white text-sm font-semibold px-4 py-2 hover:bg-slate-800 transition">
              Boka samtalet
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
