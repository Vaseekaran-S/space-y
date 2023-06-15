import Button from "../../components/Button";
import InputField from "../../components/InputField";

export function Login(){
    return(
        <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
            <h2 className="mb-4 font-bold text-xl font-mono">LOGIN FORM</h2>
            <div className="bg-gray-300 flex flex-col items-center justify-center p-12 rounded">
                <InputField placeholder="Enter Your Name" type="text"/>
                <InputField placeholder="Enter Your Phone Number" type="number"/>
                <InputField placeholder="Enter Your E-Mail" type="mail"/>
                <InputField placeholder="Enter Your E-Mail" type="password"/>
                <Button title="Submit" to="" active={true}/>
            </div>
        </div>
    )
}