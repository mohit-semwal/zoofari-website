import HeroCarosel from "../components/HeroCarosel"
import { FaPlay, FaCheck, FaPaw,
  FaUsers,
  FaBell,
  FaWarehouse } from "react-icons/fa6"
  import { FaPhoneAlt } from "react-icons/fa";
  import ServicesCard from '../components/ServicesCard'
import MembershipCard from "../components/MembershipCard";

function Home() {
  return (
    <div>

      {/* HOME SECTION  */}
      <section id="Home">
        <div className='grid grid-cols-1 min-[992px]:grid-cols-2 '>
          <div className="relative order-1 min-[992px]:order-2   h-[300px]
  min-[410px]:h-[350px]
  min-[570px]:h-[450px]
  min-[768px]:h-[600px]
  min-[992px]:h-[500px] 
  min-[1110px]:h-[550px]
  min-[1210px]:h-[608px]
  min-[1310px]:h-[750px]
  "
          >
            {/* carousel */}
            <HeroCarosel />
          </div>

          <div className=" relative bg-[url('bg-1.jpg')] bg-cover bg-center bg-no-repeat 
       order-2 min-[992px]:order-1
         h-[430px]
  min-[410px]:h-[350px]
  min-[570px]:h-[350px]
  min-[768px]:h-[600px] min-[992px]:h-[500px] min-[1110px]:h-[550px] min-[1210px]:h-[608px]
  min-[1310px]:h-[750px] ">
            {/* overlay */}
            <div className=" absolute inset-0 bg-black/60"></div>

            <div className="container relative flex flex-col justify-center h-full">
              <h1 className="text-white text-[42px]
             font-semibold pb-14 leading-12 min-[665px]:text-[50px] leading-16
             min-[910px]:text-[60px] pr-10 font-bold min-[1310px]:pr-16 ">
                Enjoy wonderful day with your family
              </h1>

              <div className="flex items-center gap-8">

                {/* Read More */}
                <button className="bg-[#2EB872] text-white px-6 py-4">
                  Read More
                </button>

                {/* Watch Video Group */}
                <div className="flex items-center gap-3">

                  {/* Play button */}
                  <button className="bg-white p-4 rounded-full flex items-center justify-center">
                    <FaPlay className="text-[#2EB872]" />
                  </button>

                  {/* Watch video text */}
                  <button className="hidden min-[576px]:inline-flex text-white px-4 py-4 text-1xl
    font-semibold">
                    Watch Video
                  </button>

                </div>

              </div>


            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="About" >
        <div className='container mb-12'>

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
      </section>

      {/* SERVICES SECTION */}
      <section id="Service">
         <div className='container my-12'>
        <div className='min-[992px]:flex place-items-center justify-between'>

          <div className=' min-[992px]:w-140 '>
            <h1><span className='text-[#2EB872]'>#</span> Our Services</h1>
         <p className='text-[35px] font-semibold leading-10 
         min-[610px]:text-[40px]
         min-[610px]:leading-14
         min-[610px]:text-[50px]
         min-[992px]:text-[50px]
         min-[992px]:leading-16
         '
         >
  Special Services For
  <span className='text-[#2EB872]'> Zoofari </span>
  Visitors
</p>
          </div>

          <div className=' bg-[#2EB872] py-6 flex gap-4 items-center  px-6
          min-[992px]:w-100'>
            <FaPhoneAlt className='text-white text-[40px]'/>
            <div>
              <p className='text-white text-[18px]'>Call for more Info</p>
              <p className='text-white text-[24px]'>+0123456789</p>
            </div>
          </div>
          
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 min-[575px]:grid-cols-2 min-[768px]:grid-cols-3 min-[992px]:grid-cols-4'>
          <ServicesCard image={"icon-2.png"} tital={"Car Parking"}/>
          <ServicesCard image={"icon-3.png"} tital={"Animal Photos"}/>
          <ServicesCard image={"icon-4.png"} tital={"Guide Services"}/>
          <ServicesCard image={"icon-5.png"} tital={"Food & Beverages"}/>
          <ServicesCard image={"icon-6.png"} tital={"Zoo Shoping"}/>
          <ServicesCard image={"icon-7.png"} tital={"Free Hi Speed Wi-Fi"}/>
          <ServicesCard image={"icon-8.png"} tital={"Play Ground"}/>
          <ServicesCard image={"icon-9.png"} tital={"Rest House"}/>
        </div>
      </div>
      </section>

      {/* PAGES/ANIMALS SECTION */}
      <section id="pages-animals">
        <div className="container my-12">

        <div className='min-[992px]:flex place-items-center justify-between'>

          <div className=' min-[992px]:w-140 '>
            <h1><span className='text-[#2EB872]'>#</span> Our Animals</h1>
            <p className='text-[35px] font-semibold leading-10 
                 min-[610px]:text-[40px]
                 min-[610px]:leading-14
                 min-[610px]:text-[50px]
                 min-[992px]:text-[50px]
                 min-[992px]:leading-16
                 '
            >
              Lest's See Our
              <span className='text-[#2EB872]'> Zoofari </span>
              Awsome Animals
            </p>
          </div>

          <div className=' bg-[#2EB872] py-6 flex gap-4 items-center  px-6
                  min-[992px]:w-100'>
            <p className='text-white text-[18px]'>Explore More Animals</p>
          </div>

        </div>

        <div className='py-10 grid grid-cols-1 gap-4
min-[768px]:grid-cols-2
min-[992px]:grid-cols-3
auto-rows-[250px]'>

          {/* normal image */}
          <div>
            <img
              src="animal-md-1.jpg"
              alt="animals"
              className='w-full h-full object-cover'
            />
          </div>

          {/* Tall */}
          <div className='min-[992px]:row-span-2'>
            <img
              src="animal-lg-2.jpg"
              alt="animals"
              className='w-full h-full object-cover'
            />
          </div>

          {/* Normal */}
          <div>
            <img
              src="animal-md-3.jpg"
              alt="animals"
              className='w-full h-full object-cover'
            />
          </div>

          {/* Tall image */}
          <div className='min-[768px]:row-span-2'>
            <img
              src="animal-lg-1.jpg"
              alt="animals"
              className='w-full h-full object-cover'
            />
          </div>

          {/* Tall image */}
          <div className='min-[992px]:row-span-2'> 
            <img
              src="animal-lg-3.jpg"
              alt="animals"
              className='w-full h-full object-cover'
            />
          </div>

          {/* Normal */}
         
           <div>
            <img
              src="animal-md-2.jpg"
              alt="animals"
              className='w-full h-full object-cover'
            />
          </div>

        </div>
      </div>
      </section>

      {/* PAGES/MEMBERSHIP SECTION */}
      <section id="pages-membership">
        <div className="container my-12">
          <div className='min-[992px]:flex place-items-center justify-between'>

          <div className=' min-[992px]:w-140 '>
            <h1><span className='text-[#2EB872]'>#</span> Membership</h1>
            <p className='text-[35px] font-semibold leading-10 
                 min-[610px]:text-[40px]
                 min-[610px]:leading-14
                 min-[610px]:text-[50px]
                 min-[992px]:text-[50px]
                 min-[992px]:leading-16
                 '
            >
              You Can Be A Proud Member Of
              <span className='text-[#2EB872]'> Zoofari </span>
            </p>
          </div>

          <div className=' bg-[#2EB872] py-6 flex gap-4 items-center  px-6
                  min-[992px]:w-100'>
            <p className='text-white text-[18px]'>Special Pricing</p>
          </div>

        </div>

        <div className='grid grid-cols-1 gap-4 py-6 min-[768px]:grid-cols-2 min-[992px]:grid-cols-3'>
          <MembershipCard bgImage={'animal-lg-1.jpg'} price={'$99.00'} heading1={'01'}
           heading2={'Popular'} list1={'10% discount'}
            list2={'2 adult and 2 child'} list3={'Free animals exhibition'}/>

          <MembershipCard bgImage={'animal-lg-2.jpg'}price={'$149.00'} heading1={'02'}
           heading2={'Standard'} list1={'15% discount'}
            list2={'4 adult and 4 child'} list3={'Free animals exhibition'}/>

          <MembershipCard bgImage={'animal-lg-3.jpg'} price={'$199.00'} heading1={'03'}
           heading2={'Premium'} list1={'20% discount'}
            list2={'6 adult and 6 child'} list3={'Free animals exhibition'}/>
        </div>

      </div>
      </section>
    </div>
  )
}

export default Home