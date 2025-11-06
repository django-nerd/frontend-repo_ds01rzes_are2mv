import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Hash, Globe, Link as LinkIcon, Star } from 'lucide-react';

export default function Onboarding() {
  const [form, setForm] = useState({
    name: '',
    niche: '',
    followers: '',
    platform: 'Instagram',
    portfolio: '',
  });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! Your creator profile has been captured locally for this MVP.');
  };

  return (
    <section id="onboarding" className="relative mx-auto max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
            <Camera className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Creator Onboarding</h2>
            <p className="text-sm text-gray-600">Share your basics so sponsors can discover you.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-700">Name</span>
            <input name="name" value={form.name} onChange={handleChange} required className="rounded-md border border-gray-300 px-3 py-2 outline-none ring-red-200 focus:ring" placeholder="Jane Creator" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-700 flex items-center gap-1"><Hash className="h-4 w-4" /> Niche</span>
            <input name="niche" value={form.niche} onChange={handleChange} required className="rounded-md border border-gray-300 px-3 py-2 outline-none ring-red-200 focus:ring" placeholder="Beauty, Tech, Travel..." />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-700 flex items-center gap-1"><Globe className="h-4 w-4" /> Platform</span>
            <select name="platform" value={form.platform} onChange={handleChange} className="rounded-md border border-gray-300 px-3 py-2 outline-none ring-red-200 focus:ring">
              <option>Instagram</option>
              <option>TikTok</option>
              <option>YouTube</option>
              <option>Twitch</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-700 flex items-center gap-1"><Star className="h-4 w-4" /> Followers</span>
            <input name="followers" value={form.followers} onChange={handleChange} type="number" min="0" className="rounded-md border border-gray-300 px-3 py-2 outline-none ring-red-200 focus:ring" placeholder="5000" />
          </label>
          <label className="sm:col-span-2 flex flex-col gap-1">
            <span className="text-sm text-gray-700 flex items-center gap-1"><LinkIcon className="h-4 w-4" /> Portfolio or Link</span>
            <input name="portfolio" value={form.portfolio} onChange={handleChange} className="rounded-md border border-gray-300 px-3 py-2 outline-none ring-red-200 focus:ring" placeholder="https://linktr.ee/you" />
          </label>
          <div className="sm:col-span-2 mt-2">
            <button className="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-red-500">
              Create Profile
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
