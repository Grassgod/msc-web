import { get, post } from './api-config'

// Request address
const getAllFilesPath = '/getAllFiles'
const getTasksByFileID = '/getTasksByFileID'

// Request interface
const GetAllFiles = () => get(getAllFilesPath)
const GetTasksByFileID = (params: any) => post(getTasksByFileID, params)

export { GetAllFiles, GetTasksByFileID }
