import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/50 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700">
            <CheckCircle2 className="text-blue-600" size={14} />
            Verified digital identities for creators & brands
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Connect sponsors with influencers — fast, fair, and verified.
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 max-w-xl">
            Onboard as a creator, showcase your portfolio, match with brands via swipe, and close deals securely with escrow-backed payments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#onboard" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-white font-semibold shadow hover:opacity-95">
              Start as Influencer
            </a>
            <a href="#sponsor" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/80 backdrop-blur px-5 py-2.5 text-slate-800 font-semibold hover:bg-white">
              I’m a Sponsor
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </section>
  );
}
