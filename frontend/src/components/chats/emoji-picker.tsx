import Tippy from '@tippyjs/react/headless'
import EmojiPickerPopper from 'emoji-picker-react'
import { memo } from 'react'

import './chats.scss'
import { Emotion } from '~/assets/icons'

const EmojiPicker = ({ setMessage }: { setMessage: React.Dispatch<React.SetStateAction<string>> }) => {
    console.log('EmojiPicker')

    return (
        <Tippy
            appendTo={document.body}
            interactive={true}
            trigger="click"
            render={() => (
                <div className="w-[85vw] xs:w-[350px]">
                    <EmojiPickerPopper
                        className="emoji-picker hidden"
                        style={{ width: '100%' }}
                        onEmojiClick={(emoji) => setMessage((prev) => (prev += emoji.emoji))}
                    />
                </div>
            )}
        >
            <div>
                <Emotion className="text-colors-secondary cursor-pointer md:w-5 w-4" />
            </div>
        </Tippy>
    )
}

export default memo(EmojiPicker)
