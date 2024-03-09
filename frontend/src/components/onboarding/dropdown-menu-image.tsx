import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { ListImageDefault } from '~/ultils/constants'
import CapturePhoto from './capture-photo'

const DropdownMenuImage = ({
    children,
    imgRef,
    imgUrl,
    setImgUrl,
}: {
    children: React.ReactNode
    imgRef: React.RefObject<HTMLInputElement>
    imgUrl: string
    setImgUrl: React.Dispatch<React.SetStateAction<string>>
}) => {
    const [isHideCapturePhoto, setIsHideCapturePhoto] = useState<boolean>(false)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Change My Image</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <CapturePhoto
                            setImgUrl={setImgUrl}
                            isHideCapturePhoto={isHideCapturePhoto}
                            setIsHideCapturePhoto={setIsHideCapturePhoto}
                        >
                            <DropdownMenuSubTrigger
                                isIcon={true}
                                onClick={() => setIsHideCapturePhoto(true)}
                            >
                                Take photo
                            </DropdownMenuSubTrigger>
                        </CapturePhoto>
                    </DropdownMenuSub>

                    <DropdownMenuItem onClick={() => imgRef.current?.click()}>
                        Upload Image
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Choose from library</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent className="relative right-[92%] xs:right-[-30%] sm:right-auto     xs:w-auto w-[246px]">
                                <DropdownMenuItem className="gap-5 flex max-w-xs flex-wrap items-center">
                                    {ListImageDefault.map((item) => (
                                        <Image
                                            key={item.id}
                                            src={item.src}
                                            alt={item.alt}
                                            width={60}
                                            height={60}
                                            className="rounded-full cursor-pointer hover:opacity-75 transition duration-150"
                                            onClick={() => {
                                                imgUrl && URL.revokeObjectURL(imgUrl)
                                                setImgUrl(item.src)
                                            }}
                                        />
                                    ))}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        imgUrl && URL.revokeObjectURL(imgUrl)
                        setImgUrl('')
                    }}
                    disabled={!imgUrl}
                >
                    Remove Image
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownMenuImage
