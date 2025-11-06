import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
        >
          Connect Sponsors with the Right Creators
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
          className="mt-4 max-w-2xl text-lg text-gray-600"
        >
          SwayMatch helps brands find influencers who match their audience, tone, and goals—fast.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.16 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#discover" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-white shadow transition hover:bg-gray-800">
            Explore Creators
          </a>
          <a href="#onboarding" className="inline-flex items-center justify-center rounded-md bg-white/80 px-6 py-3 text-gray-900 shadow ring-1 ring-gray-200 transition hover:bg-white">
            Join as Creator
          </a>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
}
