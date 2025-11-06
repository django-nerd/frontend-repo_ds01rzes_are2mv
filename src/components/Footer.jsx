import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6 py-10"
      >
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} SwayMatch. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#onboarding" className="hover:text-gray-900">Become a Creator</a>
            <a href="#discover" className="hover:text-gray-900">Find Creators</a>
            <a href="#top" className="hover:text-gray-900">Back to top</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
