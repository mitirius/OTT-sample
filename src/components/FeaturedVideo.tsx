import { PlayIcon, PlusIcon } from '@heroicons/react/24/solid';

interface Movie {
  id: number;
  title: string;
  image: string;
  thumbnail: string;
  rating: number;
}

interface HeroSectionProps {
  movie?: Movie;
}

export default function HeroSection({ movie }: HeroSectionProps) {
  if (!movie) return null;

  return (
    <section className="relative h-64 sm:h-80 md:h-[500px] mx-6 mb-8 rounded-2xl overflow-hidden">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
          {movie.title}
        </h1>
        <p className="text-gray-300 mb-2 max-w-2xl line-clamp-2">
          An epic adventure that takes you beyond the boundaries of imagination into a world where
          dreams become reality and heroes are forged in the fires of destiny.
        </p>
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-300">
          <span>11M views</span>
          <span>•</span>
          <span>1 day ago</span>
          <span>•</span>
          <span>1h 28m</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <img
            src="https://i.pravatar.cc/40?img=8"
            alt="Creator"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-white font-medium flex items-center gap-1">
              Juxtoposed <span className="text-[#a855f7]">✓</span>
            </p>
            <p className="text-sm text-gray-400">50K subscribers</p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className="text-blue-400">👍 {Math.round(movie.rating * 100)}</span>
            <span className="text-orange-400">⭐ {movie.rating.toFixed(1)}</span>
            <span className="text-yellow-400">😊</span>
          </div>
        </div>
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
      </div>
    </section>
  );
};
