'use client'

import { useFormState } from 'react-dom'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '~/components/ui/button'
import { authAction } from '~/lib/actions'

const Signup = () => {
    const [errGoogle, loginWithGoogle] = useFormState(() => authAction('google'), '')
    const [errGithub, loginWithGithub] = useFormState(() => authAction('github'), '')

    return (
        <>
            {errGoogle && <p className="text-red-500">{errGoogle}</p>}
            {errGithub && <p className="text-red-500">{errGithub}</p>}

            <form action={loginWithGoogle}>
                <Button className="gap-7 bg-colors-search-input-container-background p-6 rounded-lg">
                    <FcGoogle className="text-4xl" />
                    <span className="text-white">Login with Google</span>
                </Button>
            </form>

            <form action={loginWithGithub}>
                <Button className="gap-7 bg-colors-search-input-container-background p-6 rounded-lg">
                    <FaGithub className="text-3xl" />
                    <span className="text-white">Login with Github</span>
                </Button>
            </form>
        </>
    )
}

export default Signup
