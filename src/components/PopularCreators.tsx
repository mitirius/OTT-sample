import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

interface Creator {
  id: number;
  name: string;
  avatar: string;
  verified: boolean;
}

interface PopularCreatorsProps {
  creators: Creator[];
}

export default function PopularCreators({ creators }: PopularCreatorsProps) {
  return (
    <section className="px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Popular Creator</h2>
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
      <div
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
      >
        {creators.map((creator) => (
          <div key={creator.id} className="flex-shrink-0">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden mb-2">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-white font-medium flex items-center justify-center gap-1 mb-1">
                {creator.verified && <span className="text-red-500">✓</span>}
                {creator.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
