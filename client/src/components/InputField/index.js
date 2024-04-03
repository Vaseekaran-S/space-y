import { Field } from "formik";

export default function InputField({forwardref,...props}){
    return(
        <>
            <Field type="text" className="w-full min-w-[250px] max-w-md h-[35px] text-black text-sm border focus:outline-none focus:border-black bg-gray-100 p-3 placeholder-black-900" {...props} ref={forwardref}/>
        </>
    )
}