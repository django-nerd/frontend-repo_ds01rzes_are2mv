export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} HoloMatch. Secure sponsorships for the creator economy.</p>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
