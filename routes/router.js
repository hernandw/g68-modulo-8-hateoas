import express from 'express';
import { home, getGuitars, getGuitarById, getGuitarsHateoas } from '../controllers/controller.js'
const router = express.Router()

router.get('/', home)

router.get('/guitars/v1', getGuitars)

router.get('/guitar/:id', getGuitarById)

router.get('/guitars/v2', getGuitarsHateoas)



router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router