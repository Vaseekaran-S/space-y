import Avatar from "react-avatar";
import EditInput from "../../components/EditInput";
import Button from "../../components/Button";

export default function Profile(){
    return(
        <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
            <h2 className="mb-4 font-bold text-xl font-mono">PROFILE</h2>
            <div className="p-12 bg-gray-300 flex flex-col items-center justify-center">
                <Avatar facebookId="100008343750912" size="50" round={true} className="mb-3 border border-black"/>
                <EditInput type="text" placeholder="Enter Name" value="Vaseekaran"/>
                <EditInput type="text" placeholder="Enter Phone Number" value="9876543210"/>
                <EditInput type="text" placeholder="Enter Email" value="Vaseekaran"/>
                <Button title="Logout" to="" active={true}/>
            </div>
        </div>
    )
}