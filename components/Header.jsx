
import { assets } from '../Assets/Assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useDarkMode from './AdminComponents/DarkMode'


const Header = () => {

  const [theme, setTheme] = useDarkMode(); 

  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post('/api/email', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail("");
      } else {
        toast.error("Error: " + response.data.msg);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("An error occurred: " + error.message);
    }
  };

 
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <ToastContainer theme="dark" />
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'> 
          <Image src={assets.logo} width={180} height={60} className='cursor-pointer' alt='logo' /> 
        </div>
        <div className='flex items-center gap-4'> 
          <button className='flex items-center gap-1 font-medium py-1 px-3 sm:py-2 sm:px-4 border border-solid border-black shadow-[-7px_7px_0px_#000000]'> 
            Get Started <Image alt="arrow" src={assets.arrow} width={20} height={20} />
          </button>
          <button
            className='flex items-center gap-1 font-medium py-1 px-3 sm:py-2 sm:px-4 border border-solid border-black shadow-md'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} // Toggle dark mode
          >
            <Image 
              alt={theme === 'dark' ? "sun" : "moon"} 
              src={theme === 'dark' ? assets.sun : assets.moon} 
              width={20} 
              height={20} 
            />
          </button>
        </div>
      </div>

    
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, alias. Error, laudantium ab consequatur, unde nam veritatis vero a quod est placeat mollitia. Esse impedit voluptatibus nobis exercitationem quo minima.
        </p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            type="email" 
            placeholder='Enter your email' 
            className='pl-4 outline-none' 
            required 
          />
          <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
   
  );
};

export default Header;
