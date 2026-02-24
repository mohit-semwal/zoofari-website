import PagesIntro from '../components/PagesIntro'
import ServicesCard from '../components/ServicesCard'
import { FaPhoneAlt } from "react-icons/fa";

function Services() {
  return (
    <div>
      <PagesIntro pageName={"Services"}/>
      <div className='container my-10'>
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
      
    </div>
  )
}

export default Services