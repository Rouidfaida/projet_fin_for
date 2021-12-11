let express=require('express');
const {  addProducts, putProduct, getProduct, getProductById, deletProduct } = require('../controllers/product.controllers');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/role');
const upload = require('../middleware/upload');
let router=express.Router();
router.post('/postProduct',auth,roleCheck(['Manager']),upload.single('imageUrl'),addProducts)
router.put('/putProduct/:id',auth,roleCheck(['Manager']),putProduct)
router.delete('/deletProduct/:id',auth,roleCheck(['Manager']),deletProduct)
router.get('/getProduct',getProduct)
router.get('/getProductById/:id',getProductById)


module.exports=router