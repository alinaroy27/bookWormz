import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("Users")
        toast.success("Logged Out Successfully!")
        
        setTimeout(()=>{window.location.reload()},3000)
        
    } catch (error) {
        toast.error("error"+error)
        setTimeout(() => {
            
        },2000);

    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 border-red-500 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
