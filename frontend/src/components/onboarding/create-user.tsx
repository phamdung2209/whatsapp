'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { Session } from 'next-auth'
import Link from 'next/link'
import { toast } from 'sonner'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import PreviewImage from './preview-image'
import { updateUserAction } from '~/lib/actions'
import { Loader2 } from 'lucide-react'

const CreateUser = ({ session }: { session: Session | null }) => {
    const [name, setName] = useState<string>('')
    useEffect(() => {
        if (session) {
            setName(session?.user?.name ?? '')
        }
    }, [session])
    const imageRef = useRef<HTMLImageElement | any>(null)

    const [err, dispatch] = useFormState(() => {
        updateUserAction(
            session?.user?._id ?? '',
            name,
            imageRef?.current?.imgUrl ?? '',
            session?.user?.email ?? '',
        )
    }, null)

    return (
        <div className="flex flex-col-reverse xs:flex-row gap-6">
            <form action={dispatch} className="flex flex-col items-center justify-center">
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
                    disabled={true}
                    className="bg-colors-input-background text-start border-none outline-none focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
                />

                <div
                    className="flex items-center gap-5 w-full"
                    onClick={(e) => {
                        e.preventDefault()
                        toast.success('Welcome to Whatsapp', {
                            description: 'Let chat with friends and family',
                            duration: 5000,
                            position: 'top-right',
                            icon: '👋',
                            action: {
                                label: 'Close',
                                onClick: () => console.log('closed'),
                            },
                        })
                    }}
                >
                    <LoginUpdate />

                    <Link href="/chats" className="text-white w-1/2 h-10 rounded-lg mt-6">
                        <Button className="w-full">Next</Button>
                    </Link>
                </div>
            </form>

            <div className="w-full xs:w-auto flex items-center justify-center">
                <PreviewImage session={session} ref={imageRef} />
            </div>
        </div>
    )
}

const LoginUpdate = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type="submit" className=" text-white w-1/2 h-10 rounded-lg mt-6">
            {pending ? <Loader2 className="animate-spin w-6 h-6" /> : 'Update'}
        </Button>
    )
}

export default CreateUser
