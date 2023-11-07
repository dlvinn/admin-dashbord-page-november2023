'use client'

import Sidebar from "../sidebar/index"
import Header from "../header/index"
import { usePathname } from "next/navigation"
import Dashboard from "@/app/dashboard/page"
const CommonLayout = ({children}) => {
  const pathName = usePathname();
  return (
    <div className="flex h-full bg-background-100 dark:bg-background-900 dark:text-white">
        <Sidebar/>
        <div className="h-full w-full font-dm dark:bg-navy-900">
        <main className="mx-2.5 flex-none transition-all  dark:text-white dark:bg-navy-900 md:pr-2 xl:ml-[323px]">
            <div>
                <Header/>
                <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">{ 
                pathName === '/' ? 
                <Dashboard/> :
                children }</div>
            </div>
        </main>
        </div>
    </div>
  )
}
export default CommonLayout