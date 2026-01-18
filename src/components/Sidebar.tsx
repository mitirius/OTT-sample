import { 
  HomeIcon, 
  GlobeAltIcon, 
  FireIcon, 
  PlayIcon, 
  ClockIcon, 
  VideoCameraIcon, 
  TvIcon, 
  ListBulletIcon,
  Bars3Icon 
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const navItems = [
    { icon: HomeIcon, label: 'Home', active: true },
    { icon: GlobeAltIcon, label: 'Explore', active: false },
    { icon: FireIcon, label: 'Trending', active: false },
    { icon: PlayIcon, label: 'Shorts', active: false },
    { icon: ClockIcon, label: 'History', active: false },
    { icon: VideoCameraIcon, label: 'Live', active: false },
    { icon: TvIcon, label: 'Subscriptions', active: false },
    { icon: ListBulletIcon, label: 'Playlist', active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-[#0a0a0a] border-r border-gray-800 flex flex-col items-center py-4 z-50">
      <div className="mb-8 p-2 cursor-pointer">
        <Bars3Icon className="w-5 h-5 text-white" />
      </div>
      <nav className="flex flex-col gap-6 flex-1">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg transition-colors cursor-pointer ${
              item.active
                ? 'text-[#a855f7] bg-[#a855f7]/10'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </div>
        ))}
      </nav>
    </aside>
  );
};
