import { NextFunction, Request, Response } from 'express'

const protectRoute = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('protectRoute middleware', res)

        next()
    } catch (error: any) {
        console.log('Error in protectRoute middleware: (protectRoute.ts) ', error.message)
        res.json({ error: error.message })
    }
}

export default protectRoute
