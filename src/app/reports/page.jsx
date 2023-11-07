'use client'

import { useContext } from "react";
import Card from "../../components/card"
import CommonModal from "../../components/modal"
import { GlobalContext } from "../../context";

export default function Reports(){
    const {allReportsData} = useContext(GlobalContext);
    /* const dummyData = [
        {
            id:1,
            name: 'Report 1',
            visitors: 1000,
            sales: 45678,
            revenue: 2456,
            task: 'task 1'
        },
        {
            id:2,
            name: 'Report 2',
            visitors: 1000,
            sales: 45678,
            revenue: 2456,
            task: 'task 1'
        },
        {
            id:3,
            name: 'Report 3',
            visitors: 1000,
            sales: 45678,
            revenue: 2456,
            task: 'task 1'
        }
    ]; */
    const columns = ['name', 'visitors', 'sales', 'revenue', 'tasks']
    return <div className="mt-5 ">
    <Card additionalStyles={'w-full h-full px-6 '}>
    <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
            Report Analytics
        </div>
        <CommonModal/>
    </header>
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
            <table className="min-w-full text-sm font-light text-left">
            <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
                {
                    columns.map((col)=> <th scope="col" className="px-6 py-4">{col}</th>)
                }
            </tr>
            </thead>
            <tbody>
                {
                    allReportsData && allReportsData.length ?
                    allReportsData.map(dataItem=><tr className="border-b font-medium dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{dataItem.name}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{dataItem.visitors}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{dataItem.sales}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{dataItem.revenue}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{dataItem.task}</td>
                    </tr>)
                    :
                    null
                }
                
            </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
    </Card>
    </div>
}