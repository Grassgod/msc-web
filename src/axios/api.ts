import { get, post } from './api-config'

// Request address
const getAllFilesPath = '/api/getAllFiles'
const getTasksByFileID = '/api/getTasksByFileID'
const uploadFile = '/api/uploadFile'

// Request interface
const GetAllFiles = () => get(getAllFilesPath)
const GetTasksByFileID = (params: any) => post(getTasksByFileID, params)
const UploadFile = (params: any) => post(uploadFile, params)

export { 
    GetAllFiles,
    GetTasksByFileID,
    UploadFile
}
