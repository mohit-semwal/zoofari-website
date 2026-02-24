
import {
  FaCheck, FaPaw,
  FaUsers,
  FaBell,
  FaWarehouse
} from 'react-icons/fa6'


import PagesIntro from '../components/PagesIntro'

function About() {
  return (
    <div className=''>
      <PagesIntro pageName={"ABOUT US"} />

      <div className='container mb-6'>

        <div className=' px-6  my-16 
      min-[992px]:flex  items-center'>

          <div className='min-[992px]:w-[50%]'>
            <h1><span className='text-[#2EB872]'>#</span> Welcome To Zoofari</h1>

            <div className='mt-4'>
              <div>
                <h1 className=" mb-4 text-3xl  font-bold ">
                  Why You Should Visit
                  <span className="text-[#2EB872]"> Zoofari</span> Park!
                </h1>
                <p class="mb-4 min-[992px]:pr-16 ">
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                  stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
                  nonumy clita sit at, sed sit sanctus dolor eos.
                </p>
                <div className='flex flex-col gap-3'>
                  <span className='flex items-center gap-4'>
                    <FaCheck className='border text-[#2EB872] rounded-full p-[3px] text-[24px]' />
                    <p className='text-[20px] font-semibold'>Free Car Parking</p>
                  </span>
                  <span className='flex items-center gap-4'>
                    <FaCheck className='border text-[#2EB872] rounded-full p-[3px] text-[24px]' />
                    <p className='text-[20px] font-semibold'>Natural Environment</p>
                  </span>
                  <span className='flex items-center gap-4'>
                    <FaCheck className='border text-[#2EB872] rounded-full p-[3px] text-[24px]' />
                    <p className='text-[20px] font-semibold'>Professional Guide & Security</p>
                  </span>
                  <span className='flex items-center gap-4'>
                    <FaCheck className='border text-[#2EB872] rounded-full p-[3px] text-[24px]' />
                    <p className='text-[20px] font-semibold'>World Best Animals</p>
                  </span>
                  <button className='px-4 py-3 bg-[#2EB872] text-white mt-8 w-50'>Read More</button>
                </div>
              </div>
            </div>
          </div>

          <div className='min-[992px]:w-[50%] '>
            {/* lion image */}
            <div className=' mt-4 min-[992px]:h-[488px] min-[992px]:flex justify-center min-[1160px]:h-[428px] '>
              <img src="/about.jpg" alt="About-Image" className='h-full object-cover' />
            </div>
          </div>

        </div>

        <div className='py-20 relative bg-[url("bg-1.jpg")] bg-cover bg-center bg-no-repeat'>

          {/* overlay */}
          <div className='absolute inset-0 bg-black/60'></div>

          {/* grid container */}
          <div className='relative grid grid-cols-1 min-[768px]:grid-cols-2
           min-[992px]:grid-cols-4 place-items-center gap-10'>

            <div className='flex flex-col items-center gap-2'>
              <FaPaw className='text-[#2EB872] text-[50px]' />
              <h2 className='text-white text-[24px]'>12345</h2>
              <p className='text-white text-[16px]'>Total Animal</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <FaUsers className='text-[#2EB872] text-[50px]' />
              <h2 className='text-white text-[24px]'>12345</h2>
              <p className='text-white text-[16px]'>Daily Visitors</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <FaBell className='text-[#2EB872] text-[50px]' />
              <h2 className='text-white text-[24px]'>12345</h2>
              <p className='text-white text-[16px]'>Total Membership</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <FaWarehouse className='text-[#2EB872] text-[50px]' />
              <h2 className='text-white text-[24px]'>12345</h2>
              <p className='text-white text-[16px]'>Save Wild Life</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default About