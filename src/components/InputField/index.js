
export default function InputField({...props}){
    return(
        <div className="pb-5">
            <input type="text" {...props} className="w-[200px] h-[35px] text-sm border border-black rounded pl-3"/>
        </div>
    )
}