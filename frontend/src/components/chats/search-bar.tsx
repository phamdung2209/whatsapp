'use client'

import { ArrowLeft } from 'lucide-react'
import { useRef, useState } from 'react'

import './chats.scss'
import { Close, Filter, Search } from '~/assets/icons'

const SearchBar = () => {
    const [value, setValue] = useState<string>('')
    const searchRef = useRef<HTMLInputElement>(null)

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(value)
    }

    return (
        <div className="h-12 flex items-center justify-between px-4 py-1.5 border-b border-mainColor gap-3 search-bar transition-all duration-200 ease-in-out">
            <form
                onSubmit={handleSearch}
                className="flex items-center justify-around gap-3 text-[#54656f] text-sm bg-bgChat w-full h-full rounded-md px-2"
            >
                <input
                    className="w-full bg-transparent border-none outline-none caret-[#ff3b5c] order-2 ms-2"
                    placeholder="Search or start a new chat"
                    spellCheck="false"
                    autoCorrect="off"
                    autoComplete="off"
                    value={value}
                    ref={searchRef}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                />

                <div>
                    <ArrowLeft
                        className="cursor-pointer text-[#00a884] arrow-left order-1 hidden"
                        onClick={() => {
                            setValue('')
                        }}
                    />
                    <Search className="cursor-pointer search-btn" />
                </div>

                <div
                    className="cursor-pointer close-btn invisible order-3"
                    onClick={() => {
                        setValue('')
                        searchRef.current?.focus()
                    }}
                >
                    <Close />
                </div>
            </form>

            <Filter className="cursor-pointer" />
        </div>
    )
}

export default SearchBar
