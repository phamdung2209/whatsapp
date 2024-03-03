'use client'

import React, { useRef, useState } from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { FaCamera } from 'react-icons/fa'
import PreviewImage from './preview-image'

const CreateUser = () => {
    const [name, setName] = useState<string>('')

    return (
        <>
            <form className="flex flex-col items-center justify-center">
                <Input
                    type="text"
                    label="Display name"
                    name="display-name"
                    value={name}
                    spellCheck={false}
                    className="bg-colors-input-background text-start border-none outline-none focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />

                <Input
                    type="text"
                    label="About"
                    name="display-name"
                    spellCheck={false}
                    className="bg-colors-input-background text-start border-none outline-none focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
                />

                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        toast.success('Profile created successfully', {
                            description: 'You can now start using whatsapp',
                            duration: 5000,
                            position: 'top-right',
                            icon: '👋',
                            action: {
                                label: 'Close',
                                onClick: () => console.log('closed'),
                            },
                        })
                    }}
                    className="bg-colors-primary-background text-white w-1/2 h-10 rounded-lg mt-6"
                >
                    Next
                </Button>
            </form>

            <PreviewImage />
        </>
    )
}

export default CreateUser
