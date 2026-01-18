import { PlayIcon, PlusIcon } from '@heroicons/react/24/solid';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-[#b135ff] hover:bg-[#a12bf0] text-white px-6 py-3 rounded-lg transition-colors font-semibold">
          <PlayIcon className="w-5 h-5" />
          <span>Watch Now</span>
        </button>
        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-colors">
          <PlusIcon className="w-5 h-5" />
          <span>Add Playlist</span>
        </button>
      </div>
    </section>
  );
};