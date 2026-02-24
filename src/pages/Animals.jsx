import PagesIntro from '../components/PagesIntro'
function Animals() {
  return (
    <div>
      <PagesIntro pageName={"Our Animal"} />
      <div className="container my-10">

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
    </div>
  )
}

export default Animals