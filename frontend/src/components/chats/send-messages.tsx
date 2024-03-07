import React from 'react'
import { Emotion, Micro, Plus } from '~/assets/icons'
import { Input } from '../ui/input'

const SendMessages = () => {
    return (
        <div className="text-colors-primary gap-8 flex justify-between items-center bg-bgChat py-1 px-4 h-16 w-full absolute bottom-0 left-0 right-0 max-h-36">
            <Plus className="cursor-pointer" />

            <label className="input input-bordered flex items-center bg-white rounded-lg py-[9px] px-3 w-full gap-5">
                <Emotion className="text-colors-secondary cursor-pointer" />
                <input
                    type="text"
                    spellCheck="false"
                    autoComplete="off"
                    autoFocus={true}
                    className="block overflow-y-scroll grow font-normal text-sm focus:outline-none bg-transparent max-w-full"
                    placeholder="Type a message"
                />
                {/* <div
                    className="w-full h-full overflow-auto max-h-28 grow font-normal text-sm focus:outline-none bg-transparent max-w-full"
                    contentEditable
                >
                    <p>Type a message</p>
                </div> */}
            </label>

            <Micro className="cursor-pointer" />
        </div>
    )
}

export default SendMessages
