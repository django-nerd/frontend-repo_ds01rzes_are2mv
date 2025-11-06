import { User, Search, MessageSquare, Wallet } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-500" />
          <span className="font-semibold text-slate-800">SwayMatch</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#discover" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Search size={16} /> Discover
          </a>
          <a href="#messages" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <MessageSquare size={16} /> Messages
          </a>
          <a href="#wallet" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Wallet size={16} /> Escrow
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            <User size={16} /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 shadow hover:opacity-95">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
