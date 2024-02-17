import React, { useState } from 'react'
import { FaVideo } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import PostCard from '../cards/PostCard';

function TabPills() {

    const tabs = [
        {
            button: "Posts",
            tabIcon: <MdInsertPhoto />,
            component: <PostCard />
        },
        {
            button: "Videos",
            tabIcon: <FaVideo />,
            component: "Videos"
        },
        {
            button: "Message",
            tabIcon: <FaVideo />,
            component: "Message"
        },
    ]

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='p-3'>
            <div className='w-full h-[50px]'>
                <hr />
                <ul className='flex gap-5 flex-center'>
                    {tabs?.map((tab, index) => [
                        <li key={index} className={activeTab == index ? 'text-black border-t-red-700 border-t-2' : 'text-gray-500'}>
                            <button className='font-medium px-2 flex-center gap-1' onClick={() => { setActiveTab(index) }}>
                                <span className='pt-1'>{tab?.tabIcon}</span>{tab?.button}
                            </button>
                        </li>
                    ])}
                </ul>
            </div>
            <div className="w-full">
                {tabs?.map((tab, index) => [
                    <p key={index} className='text-black'>
                        {activeTab === index ? tab?.component : ''}
                    </p>
                ])}
            </div>
        </div>
    )
}

export default TabPills
