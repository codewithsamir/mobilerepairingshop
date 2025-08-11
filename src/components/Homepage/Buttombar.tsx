import React from 'react'

const Buttombar = () => {
  return (
  
      <div className="bg-gray-200 w-[80%] m-auto px-4 py-2 flex items-center justify-between text-sm text-gray-600">
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          https://www.icloudwireless.com/
        </div>
        <div className="w-4 h-4 border-2 border-gray-400 rounded-sm"></div>
      </div>
  )
}

export default Buttombar