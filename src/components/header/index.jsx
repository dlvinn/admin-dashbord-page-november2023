'use client'
import {FiAlignJustify} from 'react-icons/fi';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { useTheme } from 'next-themes'
import { useContext } from 'react';
import { GlobalContext } from '../../context/index';
import { usePathname } from 'next/navigation';

const Header = () => {
    //also we have to handel the switch for the mode from dark to light and vise versa you can use next-themes useTheme hook
  const { theme, setTheme } = useTheme();
  const {openSideBar, setOpenSideBar} = useContext(GlobalContext)
  console.log(theme.toLowerCase); 
  const pathName = usePathname()
  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d] ">
      <div className="ml-[6px]">
        <p className="text-[32px] capitalize text-navy-700 dark:text-white">
          {
            pathName === '/' ? 'DASHBOARD' : pathName.split('/')[1].toUpperCase()
          }
        </p>
      </div>

      <div className="relative flex mt-[3px] items-center justify-end gap-4 rounded-full bg-white px-2 py-2 shadow-xl dark:!bg-navy-800 dark:shadow-none xl:gap-2">
        <span className='cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden'>
        <FiAlignJustify className='h-5 w-5' onClick={()=>{setOpenSideBar(!openSideBar)}}/>
        </span>
        <div onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}className='cursor-pointer text-gray-600'>
        {
          theme === 'light'  
          ?
          (<RiSunFill className='h-4 w-4 text-gray-600 dark:text-white'/>
          )
          :
          (<RiMoonFill className='h-4 w-4 text-gray-600 dark:text-white'/>)
        }
      </div>
      </div>

    </nav>
  )
}
export default Header