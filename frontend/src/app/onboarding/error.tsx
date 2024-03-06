'use client'

const Error = ({ error }: { error: Error & { digest?: string } }) => {
    return (
        <main>
            <h2>{error.message}</h2>
        </main>
    )
}

export default Error
