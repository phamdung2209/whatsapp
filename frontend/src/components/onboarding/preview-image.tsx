import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { FaCamera } from 'react-icons/fa'
import { imgPreview } from '~/lib/utils'
import DropdownMenuImage from './dropdown-menu-image'
import { Session } from 'next-auth'

const PreviewImage = (
    { session }: { session: Session | null },
    ref: React.RefObject<HTMLInputElement> | any,
) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const imgRef = useRef<HTMLInputElement>(null)
    const [imgUrl, setImgUrl] = useState<string>('' as string)

    useImperativeHandle(ref, () => ({ imgUrl }))

    useEffect(() => {
        if (session) {
            setImgUrl(session?.user?.image ?? '')
        }
    }, [session])

    const handleChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        imgUrl && URL.revokeObjectURL(imgUrl)
        if (file) {
            // const blob = imgPreviewUrl(file)
            const blob = await imgPreview(file)
            setImgUrl(blob)
        }
    }

    return (
        <DropdownMenuImage imgRef={imgRef} imgUrl={imgUrl} setImgUrl={setImgUrl}>
            <Avatar
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`h-48 w-48 cursor-pointer hover:brightness-110 transition duration-150 transform hover:scale-[1.03] filter hover:drop-shadow-lg relative select-none flex items-center justify-center`}
            >
                <div
                    className={`${
                        isHovered ? 'visible' : 'hidden'
                    } absolute flex flex-col items-center justify-center gap-2
                    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-colors-primary-background p-2 rounded-lg text-center text-xs w-36 shadow-md hover:shadow-lg transition duration-150
                `}
                >
                    <input
                        ref={imgRef}
                        accept="image/*"
                        type="file"
                        className="hidden"
                        onChange={handleChangeImg}
                    />
                    <FaCamera className="text-white text-2xl" />
                    <span>Change Profile Photo</span>
                </div>

                <AvatarImage
                    src={imgUrl || '/images/default_avatar.png'}
                    alt=""
                    className={`${
                        isHovered && 'opacity-35'
                    } transition duration-150 rounded-full w-full h-full object-cover`}
                />
            </Avatar>
        </DropdownMenuImage>
    )
}

export default forwardRef(PreviewImage)
