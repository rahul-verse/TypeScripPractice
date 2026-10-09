import express from 'express'

export function createApplication() {
    const app = express() ; 

    // Middlewares 

    // Routes
    app.get('/', (req,res)=>{
        return res.json({message: `WElcom to Auth Service`})
    })

    return app 
}