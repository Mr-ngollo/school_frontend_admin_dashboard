const Announcements = () => {
  return (
    <div className="bg-slate-100 p-4 rounded-md ">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="capitalize text-gray-400 text-xs">view all</span>
        </div>
        <div className="flex flex-col gap-4 p-4">
            <div className=" bg-ngolloheader3 rounded-md p-4">
                <div className="flex justify-between items-center">
                    <h2 className= "font-medium text-gray-300">Announce header1.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md">
                        2025-05-01
                    </span> 
                </div>
            </div>
            <div className=" bg-ngolloheader1 rounded-md p-4">
                <div className="flex justify-between items-center">
                    <h2 className= "font-medium text-gray-300">Announce header2.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md">
                        2025-15-01
                    </span> 
                </div>
            </div>
            <div className=" bg-ngolloheader2 rounded-md p-4">
                <div className="flex justify-between items-center">
                    <h2 className= "font-medium text-gray-300">Announce header3.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md">
                        2025-21-01
                    </span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Announcements