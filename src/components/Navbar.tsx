import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon, 
  ArrowUpTrayIcon, 
  BellIcon, 
  ChatBubbleLeftIcon,
  FilmIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#b135ff] rounded flex items-center justify-center">
              <FilmIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">FlikTape</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search videos and channels"
                className="w-full bg-[#1a1a1a] text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-[#b135ff] focus:outline-none"
              />
            </div>
            <button
              className="p-2 rounded-lg border border-[#b135ff] text-[#b135ff] hover:bg-[#b135ff]/10"
              aria-label="Filter"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 border border-[#b135ff] text-[#b135ff] px-4 py-2 rounded-lg transition-colors hover:bg-[#b135ff]/10">
            <ArrowUpTrayIcon className="w-[18px] h-[18px]" />
            <span className="hidden sm:inline">Upload</span>
          </button>
          <button className="p-2 text-[#b135ff] hover:text-white">
            <BellIcon className="w-5 h-5" />
          </button>
          <button className="p-2 text-[#b135ff] hover:text-white">
            <ChatBubbleLeftIcon className="w-5 h-5" />
          </button>
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};
