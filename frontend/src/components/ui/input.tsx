import * as React from 'react'

import { cn } from '~/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label
                        htmlFor={props.name}
                        className={`text-colors-teal-light text-sm px-1 mt-3`}
                    >
                        {label}
                    </label>
                )}

                <input
                    type={type}
                    className={cn(
                        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:brightness-105 transition duration-150 ease-in-out',
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    },
)
Input.displayName = 'Input'

export { Input }
