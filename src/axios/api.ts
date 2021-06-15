import { get } from './api-config'

const BasicUrl = "http://34.105.223.74:8999"

// Request address
const getAllFilesPath = '/getAllFiles'

// Request interface
const GetAllFiles = () => get(BasicUrl + getAllFilesPath)

export { GetAllFiles }
