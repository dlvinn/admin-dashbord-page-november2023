'use client'
import { Dialog, DialogContent, DialogActions } from '@mui/material'
import { useContext, useState } from 'react'
import {FiPlus} from 'react-icons/fi'
import { GlobalContext, initialReportFormData} from '../../context'


export default function CommonModal(){

    const [openModal, setOpenModal] = useState(false)
    const {allTasks,reportFormData, setReportFormData,allReportsData, setAllReportsData} = useContext(GlobalContext)
    const formControls = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Enter Report Name',
            component: 'input',
            options: []
        },
        {
            name: 'visitors',
            type: 'number',
            placeholder: 'Enter Visitors Count',
            component: 'input',
            options: []
        },
        {
            name: 'sales',
            type: 'number',
            placeholder: 'Enter Number Of Sales',
            component: 'input',
            options: []
        },
        {
            name: 'revenue',
            type: 'number',
            placeholder: 'Enter Revenue',
            component: 'input',
            options: []
        },
        {
            name: 'task',
            type: 'select',
            placeholder: 'Select Task',
            component: 'select',
            options: allTasks && allTasks.length ? allTasks.map(item=>({
                label: item.title,
                value: item.title
            })): []
        },
    ]

    console.log(formControls);

    function handleAddNewReport(){
        let cypAllReportsData = [...allReportsData]
        cypAllReportsData.push({
            id:allReportsData.length + 1,
            ...reportFormData
        })
        setAllReportsData(cypAllReportsData)
        setReportFormData(initialReportFormData)
        setOpenModal(false)
        localStorage.setItem('allReportsData', JSON.stringify(cypAllReportsData))
    }
    console.log(allReportsData);
    return <div>
        <FiPlus 
        onClick={()=>setOpenModal(true)}
        className='h-6 w-6 cursor-pointer text-gray-400 dark:text-white'/>
        <Dialog open = {openModal} onClose={()=> setOpenModal(false)}> 
        {/* this is for a modal  */}
        <DialogContent className='!h-80 !w-80 '>
        <div className='flex flex-col gap-5 '>
        {
        formControls.map((control)=> control.component === 'input' ?
        <div className="flex h-[40px] items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900
        dark:text-white">
            <input name={control.name} 
            placeholder={control.placeholder} 
            type={control.type}
            value={reportFormData[control.name]}
            onChange={(e)=>{
                setReportFormData({...reportFormData, [control.name]: e.target.value})
            }}
            className='pl-3 block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:text-gray-400 dark:bg-navy-900 dark:text-white
             dark:placeholder:!!text-white'/>
        </div>
         :
        <div className="flex h-[40px] items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900
        dark:text-white">            
        <select 
        className='pl-3 block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:text-gray-400 dark:bg-navy-900 dark:text-white
        dark:placeholder:!!text-white ' 
        value={reportFormData[control.name]}
            onChange={(e)=>{
                setReportFormData({...reportFormData, [control.name]: e.target.value})
            }}
        name={control.name} placeholder={control.placeholder}>
                <option id="" value={''}>
                Select
                </option>
                {
                    control.options && control.options.length ?
                    control.options.map((optionItem)=>(
                        <option id={optionItem.value} value={optionItem.value}>
                            {optionItem.label}
                        </option>
                    )): null
                }
            </select>
        </div>)
        }
        </div>
        </DialogContent>

        <DialogActions>
            <button className='border rounded-[20px] text-lg px-12 py-3 bg-white text-gray-600 dark:text-white dark:bg-navy-800' onClick={handleAddNewReport}>
                Add new Report 
            </button>
        </DialogActions>
        </Dialog>
    </div>
}