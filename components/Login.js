import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './DashboardUi/Sidebar';
import Header from './DashboardUi/Header';

const Login = ({children}) => {
  const router = useRouter(); // Initialize the router
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform the login logic here
    // If login is successful, set isLoggedIn to true and navigate to the dashboard
    setIsLoggedIn(true);
    router.push('/dashboard'); // Redirect to the dashboard page
  return (
   
    <div>
    {isLoggedIn ? (
      // Render the dashboard content when the user is logged in
      <div className="flex flex-row h-screen w-full">
        <div className="flex-1 px-4 pb-4 p-4">
          <div className="bg-white/95 rounded-xl flex flex-row w-full h-full">
            <Sidebar />
            <div className="rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]">
              <Header />
              <div className="flex-1 overflow-y-auto">
                {/* Render your content for logged-in users here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      // Render your login form here
      <div>
        <button onClick={handleLogin}>Log In</button>
      </div>
    )}
  </div>
  );
};
}

export default Login;
