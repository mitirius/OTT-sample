import Sidebar from './components/Sidebar.tsx';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';


function App() {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-16">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
