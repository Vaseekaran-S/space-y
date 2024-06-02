
import axios from "../axios"

// POST : Upload Image at Db

export const uploadFileAtDb = async (file) =>{

    const fileData = new FormData();
    fileData.append("image", file);
    fileData.append("path", "images/image.jpg");

    const request = await axios.post('/api/upload/image', fileData);
    const response = await request.data;

    console.log(response);
    return response?.imageUrl

}