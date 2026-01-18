import { useState, useEffect } from 'react';
import PopularCreators from './PopularCreators.tsx';
import HeroSection from './FeaturedVideo.tsx';
import ContinueWatching from './ContinueWatching.tsx';
import RecommendedForYou from './RecommendedForYou.tsx';
import ContentSection from './ContentSection.tsx';

interface Movie {
  id: number;
  title: string;
  image: string;
  thumbnail: string;
  rating: number;
}

interface Creator {
  id: number;
  name: string;
  avatar: string;
  verified: boolean;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockMovies: Movie[] = Array.from({ length: 25 }, (_, i) => ({
          id: i + 1,
          title: [
            'The Last Kingdom',
            'Breaking Boundaries',
            'Midnight Chronicles',
            'Urban Legends',
            'Beyond Tomorrow',
            'Digital Dreams',
            'Cosmic Journey',
            'Silent Echo',
            'Neon Nights',
            'Frozen Time',
          ][i % 10],
          image: `https://picsum.photos/seed/movie${i + 1}/1920/1080`,
          thumbnail: `https://picsum.photos/seed/thumb${i + 1}/640/360`,
          rating: 3.5 + Math.random() * 6.5,
        }));

        const mockCreators: Creator[] = Array.from({ length: 8 }, (_, i) => ({
          id: i + 1,
          name: 'Rick Moranis',
          avatar: `https://i.pravatar.cc/150?img=${i + 30}`,
          verified: true,
        }));

        setMovies(mockMovies);
        setCreators(mockCreators);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-white">Loading...</div>;
  }

  return (
    <div className="pb-8">
      <HeroSection movie={movies[0]} />
      <ContinueWatching movies={movies.slice(1, 7)} />
      <RecommendedForYou movies={movies.slice(6, 12)} />
      <ContentSection title="Shorts" movies={movies.slice(11, 17)} type="shorts" />
      <ContentSection title="Trending" movies={movies.slice(16, 22)} type="trending" />
      <ContentSection title="Upcoming" movies={movies.slice(21, 26)} type="upcoming" />
      <PopularCreators creators={creators} />
      
      <footer className="py-4 px-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-gray-500 text-sm">itaeld @ 2025</span>
        <div className="flex gap-6 text-gray-500 text-sm">
          <a href="#" className="hover:text-gray-400 transition-colors">About</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Help</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
        </div>
        <span className="text-gray-500 text-sm">v beta 1.0.0</span>
      </footer>
    </div>
  );
};
