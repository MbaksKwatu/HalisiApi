import React, {useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/slices/userSlice';
import SnackBar from '@/components/shared/SnackBar'

const Header = () => {
    const profileRef = useRef();
    const dispatch = useDispatch();
    const [isProfileActive, setIsProfileActive] = useState(false);
    const {user} = useSelector(state => state.customer);

    const [show, setshow] = useState({
      open:false,
      text: '',
      mood: 'error'
    })


    const handleLogout = () => {
        dispatch(logout())
        setshow({open:true, text: 'Logout was successful', mood: 'info'})
      };

  return (
    <header className="z-40 flex items-center justify-between w-full h-16 shadow-sm">
              <div className="block ml-6 lg:hidden">
                <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
                  <svg
                    width="20"
                    height="20"
                    className="text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex text-2xl font-bold text-gray-900 space-x-3 ml-6 ">
                <p>Parachichi </p>
                <p>Dashboard</p>
                
              </div>
              <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div className="relative flex items-center justify-end w-full p-1 space-x-4">
                  <button onClick={handleLogout} className="flex items-center p-2 text-gray-800 bg-yellow-500 rounded-md shadow hover:text-gray-700 text-md">
                    Logout
                  </button>
                  <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="https://plus.unsplash.com/premium_photo-1664303232497-69fd12425fe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <button
                    ref={profileRef}
                    className="flex items-center text-gray-500  text-md"
                    onClick={() => setIsProfileActive(!isProfileActive)}
                  >
                    <p>{user?.name}</p> 
                    <svg
                      width="20"
                      height="20"
                      className="ml-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                    </svg>
                  </button>
                  {isProfileActive ? (
                    <div className="absolute z-10 top-12 right-0 w-64 rounded-lg bg-white shadow-md border text-sm text-gray-600">
                      <div className="p-2 text-left">
                        <span className="block text-gray-500/80 p-2">
                          {/* {"user@gmail.com"} */}
                        </span>
                        <a
                          href="/profile"
                          className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                        >
                          Profile
                        </a>

                        {/* <button className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                          Logout
                        </button> */}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <SnackBar value={show.open} text={show.text} mood={show.mood}/>
            </header>
  )
}

export default Header