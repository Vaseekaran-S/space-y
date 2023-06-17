import Avatar from "react-avatar";
import EditInput from "../../components/EditInput";
import Button from "../../components/Button";
import { db,auth } from "../../config/config"

import { doc, getDoc } from "firebase/firestore";

export default function Profile(){

    async function getData(){
        const docRef = doc(db, "cities", auth.currentUser?.email);
        const docSnap = (await getDoc(docRef)).data()
    }

    return(
        <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
            <h2 className="mb-4 font-bold text-xl font-mono">PROFILE</h2>
            <div className="p-12 bg-gray-300 flex flex-col items-center justify-center">
                <Avatar facebookId="100008343750912" size="50" round={true} className="mb-3 border border-black"/>
                <EditInput type="text" placeholder="Enter Name" />
                <EditInput type="text" placeholder="Enter Phone Number" />
                <EditInput type="text" placeholder="Enter Email" value={auth.currentUser?.email}/>
                <Button title="Logout" to="" active={true}/>
            </div>
        </div>
    )
}