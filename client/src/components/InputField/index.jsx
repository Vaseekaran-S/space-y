import { Field } from "formik";

export default function InputField({forwardref,...props}){
    return(
        <>
            <Field type="text" className="w-full md:min-w-[250px] max-w-md min-h-[35px] text-black text-sm border focus:outline-none focus:border-black bg-gray-100 p-2 placeholder-black-900" {...props} ref={forwardref}/>
        </>
    )
}