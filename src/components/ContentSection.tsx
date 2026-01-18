import { ChevronRightIcon, ChevronLeftIcon, EllipsisVerticalIcon, PlayIcon } from '@heroicons/react/24/solid';

interface Movie {
  id: number;
  title: string;
  thumbnail: string;
  rating: number;
}

interface ContentSectionProps {
  title: string;
  movies: Movie[];
  type?: 'shorts' | 'trending' | 'upcoming';
}

export default function ContentSection({ title, movies, type }: ContentSectionProps) {
  const isShorts = type === 'shorts';
  const isUpcoming = type === 'upcoming';

  return (
    <section className="px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => {}}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
          </button>
          <button 
            onClick={() => {}}
            className="p-2 bg-[#b135ff] hover:bg-[#a12bf0] rounded-lg transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="group cursor-pointer">
            <div
              className={`relative ${isShorts ? 'aspect-[9/16]' : 'aspect-video'} rounded-lg overflow-hidden mb-3 ${
                isUpcoming ? 'border-2 border-[#b135ff]' : ''
              }`}
            >
              <img
                src={isShorts ? `https://picsum.photos/seed/short${movie.id}/400/700` : movie.thumbnail}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {isUpcoming && (
                <div className="absolute top-2 right-2 bg-[#b135ff] px-2 py-1 rounded text-xs text-white font-medium">
                  UPCOMING
                </div>
              )}
              {!isShorts && !isUpcoming && (
                <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                  12:07
                </div>
              )}
              {!isUpcoming && (
                <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                  {isShorts ? '2.4M Views' : '48k Views'}
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <PlayIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src="https://i.pravatar.cc/40?img=6"
                alt="Creator"
                className="w-9 h-9 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm text-white font-medium line-clamp-2 mb-1">
                  {movie.title}
                </h3>
                <p className="text-xs text-gray-400">Juxtoposed ✓</p>
                {!isUpcoming && (
                  <>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                      <span className="text-blue-400">👍 {Math.round(movie.rating * 100)}</span>
                      <span className="text-orange-400">⭐ {movie.rating.toFixed(1)}</span>
                      <span className="text-yellow-400">😊</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">4 months ago</p>
                  </>
                )}
              </div>
              <a
                href="#"
                className="text-white hover:text-gray-300 no-underline transition-colors"
                aria-label="More options"
              >
                <EllipsisVerticalIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
