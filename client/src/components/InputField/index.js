
export default function InputField({forwardref,...props}){
    return(
        <div className="pb-5">
            <input type="text" className="w-[200px] h-[35px] text-sm border border-black rounded pl-3 pt-[3px] bg-white" {...props} ref={forwardref}/>
        </div>
    )
}