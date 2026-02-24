import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaAngleRight,
} from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className=' relative  bg-[url("bg-2.jpg")] bg-center bg-cover'>
        {/* Obverlay */}
        <div className='absolute inset-0 bg-black/60'></div>

        <div className='relative container   grid grid-cols-1 py-16
          min-[768px]:grid-cols-2 min-[992px]:grid-cols-4'>

          <div className="mt-10">
            <h1 className='text-white text-2xl'>Address</h1>

            <div className="mt-5 flex flex-col gap-2">

              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-[#ffffff]" />
                <p className="text-[#ffffff]">123 Street, New York, USA</p>
              </div>

              <div className="flex gap-2 items-center">
                <FaPhone className="text-[#ffffff]" />
                <p className="text-[#ffffff]">+0123456789</p>
              </div>

              <div className="flex gap-2 items-center">
                <FaEnvelope className="text-[#ffffff]" />
                <p className="text-[#ffffff]">zoofari@example.com</p>
              </div>

              <div className="flex gap-1 items-center mt-4">
                <FaXTwitter className="text-[#ffffff] text-[36px] border border-white p-[10px]" />
                <FaFacebookF className="text-[#ffffff] text-[36px] border border-white p-[10px]" />
                <FaYoutube className="text-[#ffffff] text-[36px] border border-white p-[10px]" />
                <FaLinkedinIn className="text-[#ffffff] text-[36px] border border-white p-[10px]" />
              </div>

            </div>
          </div>

          <div className="mt-10">
            <h1 className='text-white text-2xl'>Quick Links</h1>

            <div className="mt-5 flex flex-col gap-2">

              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">About Us</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">Contact Us</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">Our Services</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">Terms & Condition</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">Support</p>
              </div>

            </div>

          </div>

          <div className="mt-10">
            <h1 className='text-white text-2xl'>Popular Links</h1>

            <div className="mt-5 flex flex-col gap-2">

              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">About Us</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">Contact Us</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">Our Services</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">Terms & Condition</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaAngleRight className="text-[#ffffff]" />
                <p className="text-[#ffffff]">Support</p>
              </div>

            </div>

          </div>

          <div className="mt-10">
            <h1 className='text-white text-2xl'>Newsletter</h1>

            <div className="mt-5 flex flex-col gap-2">
              <p className="text-[#ffffff]">
                Dolor amet sit justo amet elitr
                clita ipsum elitr est.
              </p>
              <div className="bg-white p-2 flex gap-2 items-center">
                <input
                  type="email"
                  placeholder="your email"
                  className="flex-1 outline-none border-none focus:outline-none focus:ring-0 min-[992px]:w-10"
                />

                <button className="bg-[#2EB872] text-white px-4 py-2">
                  SignUp
                </button>
              </div>
            </div>
          </div>

        </div>


      </footer>
    </div>
  )
}

export default Footer