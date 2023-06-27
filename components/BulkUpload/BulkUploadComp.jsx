import axios from "axios";
import React, { useState } from "react";

const BulkUploadComp = ()=>{

    const [fileData,setFileData] = useState(null)
    console.log(fileData,"file")
    const handleSubmit =async ()=>{
        const formData = new FormData();
        formData.append("bulkCsv", fileData);
    
        const uploadCSV = await axios.post("/api/bulkUpload", formData);
        console.log(uploadCSV,"uploadCsv")
    }

    return (
      <div className="h-full w-full flex justify-center items-center ">
        <div>
          <div className="flex items-center space-6 flex-col" >
            <label className="block">
              <span className="sr-only">Choose CSV file</span>
              <input
                type="file"
                accept=".csv"
                onChange={(e)=>{setFileData(e.target.files[0])}}
                className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 "
              />
            </label>
            <button type="button" onClick={()=>handleSubmit()} className="px-4 py-1 mt-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Upload</button>
  

          </div>
        </div>
      </div>
    );
}

export default BulkUploadComp