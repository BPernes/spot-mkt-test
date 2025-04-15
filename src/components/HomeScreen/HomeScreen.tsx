import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';

function HomeScreen() {
  return (
    <>
      <main className="w-full h-screen flex flex-row relative">
        <Sidebar />
        <Dashboard />
      </main>
    </>
  );
}

export default HomeScreen;
