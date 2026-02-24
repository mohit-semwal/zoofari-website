import PagesIntro from '../components/PagesIntro'
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaLocationDot,
  FaEnvelope,
} from "react-icons/fa6";
function Contact() {
  return (
    <div>
      <PagesIntro pageName={"Contact"}/>

      <div className="container my-16">

        <div className='grid grid-cols-1 gap-4 min-[992px]:grid-cols-3'>

          <div className='bg-[#F3F4F5] flex gap-4 items-center p-10'>
            <div>
              <FaLocationDot className='bg-white text-[#2EB872] p-[10px] text-[36px]'/>
            </div>
            <div>
              <p> <span className='text-[#2EB872] '>#</span> Address</p>
              <p className='text-[24px] font-semibold'>123 Street, New York, USA</p>
            </div>
          </div>

          <div className='bg-[#F3F4F5] flex gap-4 items-center p-10'>
            <div>
              <FaPhoneAlt className='bg-white text-[#2EB872] p-[10px] text-[36px]'/>
            </div>
            <div>
              <p> <span className='text-[#2EB872] '>#</span>  Call Now</p>
              <p className='text-[24px] font-semibold'>+0123456789</p>
            </div>
          </div>

          <div className='bg-[#F3F4F5] flex gap-4 items-center p-10'>
            <div>
              <FaEnvelope className='bg-white text-[#2EB872] p-[10px] text-[36px]'/>
            </div>

            <div>
              <p> <span className='text-[#2EB872] '>#</span>  Mail</p>
              <p className='text-[21px] font-semibold pr-10'>mohit@example <br />.com</p>
            </div>
          </div>

        </div>

        <div className='mt-10 grid grid-cols-1 gap-4 min-[992px]:grid-cols-2'>
          <div>
            <p className='mb-2' ><span className='text-[#2EB872]'>#</span> Contact Us</p>
            <h1 className='mb-4 font-bold text-[30px]
            min-[529px]:text-[40px]
            
            '>
              Have Any Query? Please Contact Us!
              </h1>
            <p class="mb-4">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax &amp; PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
              <a href="" className='text-[#2EB872]'> Download Now</a>.
            </p>

            <form action="" className='flex flex-col gap-4 mt-10'>
              <div className='grid gap-4 min-[992px]:grid-cols-2'> 
                <input type="text" placeholder='Name' className='bg-[#F3F4F5] w-full py-[14px] 
                placeholder:text-[20px] placeholder:pl-3'  />
                <input type="text" placeholder='Email' className='bg-[#F3F4F5] w-full py-[14px] 
                placeholder:text-[20px] placeholder:pl-3'  />
              </div>
              <div>
                <input type="text" placeholder='Subject' className='bg-[#F3F4F5] w-full py-[14px] 
                placeholder:text-[20px] placeholder:pl-3' />
              </div>
              <div>
                <textarea placeholder='Message' rows={6} className='bg-[#F3F4F5] w-full py-[14px] 
                placeholder:text-[20px] placeholder:pl-3' ></textarea>
              </div>
              <div>
                <button className='bg-[#2EB872] w-full py-2 text-white font-bold'>send Message</button>
              </div>
            </form>
          </div>

          {/* map */}
          <div className='h-[400px] min-[992px]:h-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0505383674!2d-74.30915841691113!3d40.697193362054165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1771917660925!5m2!1sen!2sin"
            className='w-full h-full'
              allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact