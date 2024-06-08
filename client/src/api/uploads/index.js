
import axios from "../axios"

// POST : Upload Image at Db

export const uploadFileAtDb = async (file, imagePath) =>{
    try{    
        const fileData = new FormData();
        fileData.append("image", file);
        fileData.append("path", imagePath);
    
        const request = await axios.post('/api/upload/image', fileData);
        const response = await request.data;
        
        return { status: 200, image: response?.imageUrl } || response
    }catch(err){
        return { status: 403, message: err.message }
    }
}