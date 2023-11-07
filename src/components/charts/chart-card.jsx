import Card from "../card"
import ChartLayout from './chart-layout'
import {MdBarChart} from 'react-icons/md'
const ChartCard = ({type, title, chartData, chartOptions}) => {
  return (
    <Card additionalStyles={'flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center'}>
        <div className="mb-auto flex items-center justify-between px-6">
          <h2 className="text-xl font-bold text-navy-700 dark:text-white">
            {title}
          </h2>
          <button className="z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 !transition duration-200 hover:cursor-pointer hover:bg-gray-200 dark:bg-navy-700 text-[#fpc46b]">
            <MdBarChart className="h-6 w-6"/>
          </button>
        </div>
        <div className="md mt-16 lg:mt-0">
        <div className="height-[250px] w-full xl:h-[350px]">
          <ChartLayout type={type}
          chartOptions={chartOptions}
          chartData={chartData}
          />
        </div>
        </div>
    </Card>
  )
}
export default ChartCard