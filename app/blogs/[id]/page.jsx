// 'use client'
// import  {assets}  from '/Assets/Assets/assets';
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import Footer from '/components/Footer';
// import Link from 'next/link';
// import axios from 'axios';


// const Page = ({params}) => {
  
//   const [data,setData] = useState(null);

//   const fetchBlogData = async() =>{
//     const response = await axios.get('/api/blog',{
//       params:{
//         id:params.id
//       }
//     })
//     setData(response.data)
   
// }
//   useEffect(()=>{
//   fetchBlogData()
//   },[])

//   return (data?<>
//     <div className='bg-gray-300 py-5 px-5 md:px-12 lg:px-28'>
//       <div className='flex justify-between items-center'>
//         <Link href='/'>
//         <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'></Image>
//         </Link>
//         <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get started<Image src={assets.arrow}alt=''></Image></button>
//       </div>
//       <div className='text-center my-24'>
//         <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
//         <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} alt="" width={60} height={60}></Image>
//         <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
//       </div>
//     </div>
//     <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
//     <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''></Image>
  
//     <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}></div>
//     <div className='my-24'>
//       <p className='text-black font font-semibold my-4'>Share this article on social media:</p>
//       <div className='flex'>
//         <Image src={assets.facebook_icon}width={50}alt=''></Image>
//         <Image src={assets.twitter_icon}width={50}alt=''></Image>
//         <Image src={assets.googleplus_icon}width={50}alt=''></Image>
//       </div>
//     </div>
//     </div>
//     <Footer></Footer>
    
//     </>:<></>
//   )
// }

// export default Page


'use client';
import { assets } from '/Assets/Assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '/components/Footer';
import Link from 'next/link';
import axios from 'axios';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('/api/blog', {
          params: {
            id: params.id,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    if (params?.id) {
      fetchBlogData();
    }
  }, [params?.id]);

  return (
    data ? (
      <>
        <div className='bg-gray-300 py-5 px-5 md:px-12 lg:px-28'>
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <Image src={assets.logo} width={180} height={60} alt='Logo' className='w-[130px] sm:w-auto' />
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
              Get started
              <Image src={assets.arrow} alt='Arrow' width={20} height={20} />
            </button>
          </div>
          <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} alt="Author" width={60} height={60} />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
          </div>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
          <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='Blog Image' />
          <div className='blog-content' dangerouslySetInnerHTML={{ __html: data.description }}></div>
          <div className='my-24'>
            <p className='text-black font font-semibold my-4'>Share this article on social media:</p>
            <div className='flex'>
              <Image src={assets.facebook_icon} width={50} height={50} alt='Facebook' />
              <Image src={assets.twitter_icon} width={50} height={50} alt='Twitter' />
              <Image src={assets.googleplus_icon} width={50} height={50} alt='Google Plus' />
            </div>
          </div>
        </div>
        <Footer />
      </>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default Page;
