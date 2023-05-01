import React from "react";
import { SectionWrapper } from "../hoc";
import {ikpro} from '../assets';
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";



const AboutMe = () => {
  return (
    <>
    <main className='flex w-full flex-col items-center justify-center'>
        <div className='xl:grid max-w-7xl grid-cols-8 gap-16 md:gap-8'>

        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-1  md:col-span-8 sm:col-span-8'>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Imanuel Kisku</p>
        <h2 className={styles.sectionHeadText}>Biography</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am blockchain and software developer. I have been working all over the world for the past 5 years and more. I am constantly learning and applying new technologies.You should hire me because, I will take care of your work and I love coding. So you can expect your work to end successfully.
         <br/>Thanks 🔥
      </motion.p>
      
         </div>

           {/* bio image */}

        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-[#ffffff] bg-[#1D1836] p-8 md:order-2'> 
        <div  className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#ffffff]'/>
            <img src={ikpro} alt="ikpro" className='w-full h-auto rounded-2xl' />
        </div>
         

        </div>
   

    </main>

    </>
      
  );
};

export default SectionWrapper(AboutMe);
