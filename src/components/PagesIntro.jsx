
function PagesIntro({pageName}) {
  return (
    <div className=' relative bg-[url("bg-1.jpg")] bg-cover
     bg-center bg-no-repeat h-[250px] min-[575px]:h-[300px]'>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative h-full flex flex-col justify-center ">
            <h1 className='text-[30px] text-white font-bold
            min-[625px]:text-[40px] min-[992px]:text-[45px] min-[1220px]:text-[50px]'>
            {pageName}
            </h1>
        <p className="text-white font-semibold">Home / Pages / <span  className='text-[#2EB872]'>{pageName}</span></p>
        </div>
    </div>
  )
}

export default PagesIntro