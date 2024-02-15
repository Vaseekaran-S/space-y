import React from 'react'

function Alerts({ msg, status }) {
    let borderStyle = (status >= 340) ? 'border-b-red-600' : ((status >= 300) ? 'border-b-orange-500' : 'border-b-green-600')
    return (
        <div className={`fixed bottom-[20px] border-b-4 right-[20px] border py-1 px-2 rounded ${borderStyle}`}>
            {msg}
        </div>
    )
}

export default Alerts
