import { use, useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'

const CapturePhoto = ({
    children,
    isHideCapturePhoto,
    setIsHideCapturePhoto,
    setImgUrl,
}: {
    children: React.ReactNode
    isHideCapturePhoto: boolean
    setIsHideCapturePhoto: React.Dispatch<React.SetStateAction<boolean>>
    setImgUrl: React.Dispatch<React.SetStateAction<string>>
}) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        if (isHideCapturePhoto) {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: false })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream
                    }
                })
                .catch((err) => {
                    console.error('Error accessing the camera', err)
                })
        } else {
            ;(videoRef.current?.srcObject as MediaStream)
                ?.getTracks()
                .forEach((track) => track.stop())
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            ;(videoRef.current?.srcObject as MediaStream)
                ?.getTracks()
                .forEach((track) => track.stop())
        }
    }, [isHideCapturePhoto])

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent
                className="sm:max-w-[425px]"
                setIsHideCapturePhoto={setIsHideCapturePhoto}
            >
                <DialogHeader>
                    <DialogTitle>Take a photo</DialogTitle>
                    <DialogDescription>
                        Change your profile photo by taking a new photo with your camera
                    </DialogDescription>
                </DialogHeader>

                <div className="flex items-center justify-center w-full h-[300px] bg-gray-300">
                    <video id="video" autoPlay ref={videoRef}></video>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            type="submit"
                            onClick={() => {
                                const canvas = document.createElement('canvas')
                                canvas.width = 300
                                canvas.height = 300
                                const context = canvas.getContext('2d')
                                if (context) {
                                    context.drawImage(
                                        videoRef.current as HTMLVideoElement,
                                        0,
                                        0,
                                        300,
                                        300,
                                    )
                                    const imgUrl = canvas.toDataURL('image/png')
                                    setIsHideCapturePhoto(false)
                                    setImgUrl(imgUrl)
                                }
                            }}
                        >
                            Take photo
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CapturePhoto
