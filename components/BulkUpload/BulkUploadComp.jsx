import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const BulkUploadComp =()=>{

    const [fileData,setFileData] = useState(null)
  
    const handleUpload = async () => {
      try {
        if(fileData){
        const formData = new FormData();
        formData.append("bulkCsv", fileData);

        const uploadCSV = await axios.post("/api/bulkCsvUpload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if(uploadCSV){
          if(uploadCSV.status == 200){
            let response = uploadCSV.data
            console.log(response,"response")
            if(!uploadCSV.data.error){
              toast.success(response.message)
            }else{
              toast.error(response.message)
            }
          }else{
            console.log(uploadCSV,"resp")
            toast.error("Something went wrong")
          }
        }
    
        console.log(uploadCSV, "uploadCsv");
      }
      } catch (error) {
        console.error("Error occurred during file upload:", error);
        // Handle the error, show an error message, or perform any necessary actions.
      }
    };

    return (
      <div className="h-full w-full flex justify-center items-center">
        
          <div className="flex items-center space-6 flex-col mt-20" >
            <h3 className="text-2xl font-semibold mb-14 mt-10 text-black">Bulk CSV Upload</h3>
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
            <button type="button" onClick={()=>handleUpload()} className="px-4 py-1 mt-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Upload</button>
  

          </div>
          <ToastContainer />
      </div>
    );
}

export default BulkUploadComp;