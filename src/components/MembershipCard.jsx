import { FaCheck } from "react-icons/fa";

function MembershipCard({ bgImage, price, heading1, heading2, list1, list2, list3 }) {
    return (
        <div>
            <div
                className='relative bg-cover bg-center bg-no-repeat h-[500px]'
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* overlay */}
                <div className='absolute inset-0 bg-black/60'></div>

                <div className='relative py-16 px-8'>
                    <h1 className=" text-[70px]
    font-bold
    text-transparent
    [-webkit-text-stroke:2px_#22c55e]">{heading1}</h1>
                    <h2 className="text-white font-bold text-[24px]">{heading2}</h2>
                    <p className="text-[#2EB872] font-bold text-[24px]">{price}</p>
                    <div className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <FaCheck className="text-[#2EB872]" />
                            <p className="text-white">{list1}</p>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <FaCheck className="text-[#2EB872]" />
                            <p className="text-white">{list2}</p>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <FaCheck className="text-[#2EB872]" />
                            <p className="text-white">{list3}</p>
                        </div>
                    </div>
                    <button className="text-white border border-white
                    px-8 py-3
                    ">
                        Get Started
                        </button>
                </div>

            </div>
        </div>
    )
}

export default MembershipCard