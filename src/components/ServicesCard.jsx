

function ServicesCard({image,tital}) {
  return (
    <div>
        <img src={image} alt="service-icon" className=''/>
        <h1 className='text-[24px] text-black font-medium my-2 '>{tital}</h1>
        <p className='text-[17px]'>Erat ipsum justo amet duo et elitr dolor,
             est duo duo eos lorem sed diam stet diam sed stet.</p>
    </div>
  )
}

export default ServicesCard