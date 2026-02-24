import MembershipCard from '../components/MembershipCard'
import PagesIntro from '../components/PagesIntro'

function Membership() {
  return (
    <div>
      <PagesIntro pageName={"Membership"}/>

      <div className="container my-10">
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

    </div>
  )
}

export default Membership