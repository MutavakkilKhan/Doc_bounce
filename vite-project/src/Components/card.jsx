
import { FaFileAlt } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function card ({data,reference}) {
   
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} dragElastic={.1}className=' relative  flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900 text-white px-5 py-10 overflow-hidden '>
        <FaFileAlt/>
        <p className='text-xs leading-tight  mt-6'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full h-15  left-0 '>
            <div className='flex items-center justify-between py-3 px-8 mb-2'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 flex items-center justify-center'>
                  {data.close ? <IoMdCloudDownload/> :<IoCloseOutline/>}
                </span>
            </div>
             {
                data.tag.isopen && (
                    <div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-700": "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-md'>{data.tag.tagtitle}</h3>
                </div>
                )}
          
        </div>

    </motion.div>
  );
}

export default card
