import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-backdrop-blur:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900" aria-hidden="true"></div>
            <span className="text-slate-900 text-sm sm:text-base font-semibold tracking-tight">Select Growth</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#erbjudande" className="hover:text-slate-900 transition">Erbjudande</a>
            <a href="#process" className="hover:text-slate-900 transition">Process</a>
            <a href="#vem" className="hover:text-slate-900 transition">Vem vi hjälper</a>
            <a href="#ansok" className="hover:text-slate-900 transition">Boka</a>
          </nav>
          <a href="#ansok" className="inline-flex items-center rounded-full bg-slate-900 text-white text-sm font-semibold px-4 py-2 hover:bg-slate-800 transition">
            Boka samtalet
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
