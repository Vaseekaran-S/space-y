import React, { useEffect, useState } from 'react'
import { searchUser } from '../../api/users'
import { useNavigate } from 'react-router-dom'
import debounce from 'lodash.debounce'

function SearchInput() {
    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [users, setUsers] = useState([])

    const fetchUsersData = async (query) => {
        const data = await searchUser(query)
        setUsers(data || [])
    }
    const debouncedFetchUsersData = debounce(fetchUsersData, 300)
    useEffect(() => {
        if (user) {
            debouncedFetchUsersData(user)
        } else {
            setUsers([])
        }
        return () => {
            debouncedFetchUsersData.cancel()
        }
    }, [user])

    const searchFunction = (username) => {
        setUser("")
        setUsers([])
        navigate(`/${username}`)
    }

    return (
        <div className="relative">
            <div className='flex items-center mx-auto'>
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="simple-search" value={user} onChange={(event) => setUser(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:w-[250px] rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search..." required />
                </div>
                <button onClick={()=>searchFunction(user)} type="submit" className="p-2 ms-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
            {users.length > 0 &&
                <div className='absolute top-[100%] bg-white w-full max-h-[300px] m-auto rounded-lg border'>
                    {users.map(user => [
                        <div key={user?.username} className='flex hover:bg-gray-100 px-4 py-2 cursor-pointer' onClick={()=>searchFunction(user?.username)}>
                            <img src={user?.profileImage} alt={user?.name} className='h-[50px] w-[50px] rounded-full object-cover' />
                            <div className='ml-3 flex flex-col'>
                                <h3 className='font-bold text-sm'>{user?.name}</h3>
                                <p className='text-gray-400'>{user?.username}</p>
                            </div>
                        </div>
                    ])}
                </div>
            }
        </div>

    )
}

export default SearchInput
