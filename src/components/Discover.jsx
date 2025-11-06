import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, MapPin } from 'lucide-react';

const MOCK_CREATORS = [
  { id: 1, name: 'Ava Chen', niche: 'Tech', platform: 'YouTube', followers: 120000, location: 'SF, USA', rating: 4.8 },
  { id: 2, name: 'Diego Cruz', niche: 'Fitness', platform: 'Instagram', followers: 85000, location: 'MX City, MX', rating: 4.6 },
  { id: 3, name: 'Maya Patel', niche: 'Beauty', platform: 'TikTok', followers: 220000, location: 'NYC, USA', rating: 4.9 },
  { id: 4, name: 'Leo Martin', niche: 'Travel', platform: 'YouTube', followers: 64000, location: 'Paris, FR', rating: 4.5 },
];

export default function Discover() {
  const [query, setQuery] = useState('');
  const [platform, setPlatform] = useState('All');

  const filtered = useMemo(() => {
    return MOCK_CREATORS.filter((c) => {
      const matchesQuery = `${c.name} ${c.niche}`.toLowerCase().includes(query.toLowerCase());
      const matchesPlatform = platform === 'All' || c.platform === platform;
      return matchesQuery && matchesPlatform;
    });
  }, [query, platform]);

  return (
    <section id="discover" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Discover Creators</h2>
          <p className="text-sm text-gray-600">Filter by niche, platform, and audience size.</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-red-200 focus:ring">
            <option>All</option>
            <option>Instagram</option>
            <option>TikTok</option>
            <option>YouTube</option>
            <option>Twitch</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or niche"
            className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 outline-none ring-red-200 focus:ring"
          />
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.niche} • {c.platform}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{c.rating}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1"><Users className="h-4 w-4" /> {c.followers.toLocaleString()} followers</div>
                <div className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {c.location}</div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="inline-flex flex-1 items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800">Shortlist</button>
                <button className="inline-flex flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">Message</button>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}
