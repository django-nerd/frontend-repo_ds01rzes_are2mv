import { useMemo, useState } from 'react';
import { Star, MapPin, Users } from 'lucide-react';

const sampleInfluencers = [
  { id: 1, name: 'Ava Li', niche: 'Beauty', followers: 220000, region: 'US', engagement: 4.2, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Leo Park', niche: 'Gaming', followers: 480000, region: 'KR', engagement: 5.1, avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Mina Rao', niche: 'Fitness', followers: 150000, region: 'IN', engagement: 3.8, avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Zara Chen', niche: 'Tech', followers: 90000, region: 'UK', engagement: 6.3, avatar: 'https://images.unsplash.com/photo-1544005316-4dc0b94101dc?q=80&w=400&auto=format&fit=crop' },
];

export default function Discover() {
  const [query, setQuery] = useState('');
  const [niche, setNiche] = useState('');
  const [region, setRegion] = useState('');

  const filtered = useMemo(() => {
    return sampleInfluencers.filter((i) => {
      const matchesQuery = i.name.toLowerCase().includes(query.toLowerCase());
      const matchesNiche = niche ? i.niche === niche : true;
      const matchesRegion = region ? i.region === region : true;
      return matchesQuery && matchesNiche && matchesRegion;
    });
  }, [query, niche, region]);

  return (
    <section id="discover" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Discover creators</h3>
            <p className="text-slate-600">Search and filter by niche, followers, engagement, and region.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search..." className="h-10 rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500"/>
            <select value={niche} onChange={(e)=>setNiche(e.target.value)} className="h-10 rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All niches</option>
              <option>Beauty</option>
              <option>Gaming</option>
              <option>Fitness</option>
              <option>Tech</option>
            </select>
            <select value={region} onChange={(e)=>setRegion(e.target.value)} className="h-10 rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All regions</option>
              <option>US</option>
              <option>UK</option>
              <option>IN</option>
              <option>KR</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <img src={p.avatar} alt={p.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-900">{p.name}</h4>
                  <span className="inline-flex items-center gap-1 text-amber-600 text-sm"><Star size={14} /> {p.engagement}%</span>
                </div>
                <p className="text-sm text-slate-600">{p.niche}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1"><Users size={14} />{p.followers.toLocaleString()} followers</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={14} />{p.region}</span>
                </div>
                <button className="mt-4 w-full rounded-lg bg-slate-900 text-white py-2 text-sm font-semibold group-hover:bg-slate-800">Shortlist</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
