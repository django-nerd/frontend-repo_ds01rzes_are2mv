import { useState } from 'react';
import { User, Link, UploadCloud, Hash, Globe, MapPin, Camera } from 'lucide-react';

export default function Onboarding() {
  const [form, setForm] = useState({
    role: 'influencer',
    name: '',
    niche: '',
    followers: '',
    region: '',
    website: '',
    portfolioUrl: '',
    socials: {
      instagram: '',
      tiktok: '',
      youtube: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, socials: { ...prev.socials, [name]: value } }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted onboarding for: ' + form.name + ' (' + form.role + ')');
  };

  return (
    <section id="onboard" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Influencer onboarding</h2>
            <p className="mt-3 text-slate-600">Create your profile, connect socials, and get verified to start matching with brands.</p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><Camera className="text-blue-600 mt-1" size={18}/> Portfolio & media kit upload</li>
              <li className="flex items-start gap-3"><Hash className="text-blue-600 mt-1" size={18}/> Niche, audience, and engagement details</li>
              <li className="flex items-start gap-3"><Globe className="text-blue-600 mt-1" size={18}/> Social verification with public links</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Role</label>
                <select name="role" value={form.role} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500">
                  <option value="influencer">Influencer</option>
                  <option value="sponsor">Sponsor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Display name</label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input name="name" value={form.name} onChange={handleChange} placeholder="@username or brand" className="w-full rounded-md border-slate-300 pl-9 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Primary niche</label>
                <input name="niche" value={form.niche} onChange={handleChange} placeholder="Beauty, Gaming, Fitness..." className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Followers</label>
                <input name="followers" value={form.followers} onChange={handleChange} placeholder="e.g. 120000" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Region</label>
                <input name="region" value={form.region} onChange={handleChange} placeholder="North America" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Website</label>
                <div className="mt-1 relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input name="website" value={form.website} onChange={handleChange} placeholder="https://" className="w-full rounded-md border-slate-300 pl-9 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Instagram</label>
                <input name="instagram" value={form.socials.instagram} onChange={handleSocialChange} placeholder="https://instagram.com/" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">TikTok</label>
                <input name="tiktok" value={form.socials.tiktok} onChange={handleSocialChange} placeholder="https://tiktok.com/@" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">YouTube</label>
                <input name="youtube" value={form.socials.youtube} onChange={handleSocialChange} placeholder="https://youtube.com/" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Portfolio URL</label>
              <input name="portfolioUrl" value={form.portfolioUrl} onChange={handleChange} placeholder="Link to drive, PDF, website" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <button type="submit" className="w-full rounded-lg bg-slate-900 text-white py-2.5 font-semibold hover:bg-slate-800">
              Save and continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
