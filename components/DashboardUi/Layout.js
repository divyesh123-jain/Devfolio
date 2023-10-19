import Sidebar from '@/components/DashboardUi/Sidebar';


export default function Layout({ children }) {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="flex-1 px-4 pb-4 p-4">
        <div className="bg-white/95 rounded-xl flex flex-row w-full h-full">
          <Sidebar />
          <div className="rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]">
           
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
