"use client"
import Image from "next/image"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    {
        name: "Jan",
        income:  6500,
        expense: 3600,
    },
    {
        name: "Feb",
        income:  5000,
        expense: 6200,
    },
    {
        name: "Mar",
        income:  6500,
        expense: 3809,
    },
    {
        name: "Apr",
        income:  4900,
        expense: 7500,
    },
    {
        name: "May",
        income:  7000,
        expense: 3900,
    },
    {
        name: "Jun",
        income:  5000,
        expense: 6000,
    },
    {
        name: "Jul",
        income:  5000,
        expense: 1200,
    },
    {
        name: "Aug",
        income:  3920,
        expense: 3000,
    },
    {
        name: "Sep",
        income:  7600,
        expense: 4000,
    },
    {
        name: "Oct",
        income:  6090,
        expense: 2800,
    },
    {
        name: "Nov",
        income:  5900,
        expense: 5400,
    },
    {
        name: "Dec",
        income:  3000,
        expense: 8000,
    },
]
const FinanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
                <h1 className="font-semibold">Finance</h1>
                <Image src={"/moreDark.png"} alt="" width={20} height={20} className="flex text-lg"/>
        </div>

        <ResponsiveContainer width= "100%" height="90%" >
            <LineChart width={500} height={300} data={data} barSize={20} >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                <XAxis 
                    dataKey= "name" 
                    axisLine={false} 
                    tick={{fill:" #d1d5db"}} 
                    tickLine={false}
                    tickMargin={10}
                />
                <YAxis 
                    axisLine={false} 
                    tick={{fill:" #d1d5db"}} 
                    tickLine={false}
                    tickMargin={20}
                />
                <Tooltip/>
                <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop: "10px", paddingBottom: "30px"}}/>
                <Line
                    type={"monotone"}
                    dataKey={"income"}
                    stroke="#8884d8"
                    strokeWidth={5}
                />
                <Line
                    type={"monotone"}
                    dataKey={"expense"}
                    stroke="#82ca9d"
                    strokeWidth={5} 
                />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart