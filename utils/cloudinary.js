const cloudinary= require('cloudinary').v2
// let config=require('config')
// let cloud_name=config.get('CLOUDINARY_CLOUD_NAME')
// let api_key=config.get('CLOUDINARY_API_KEY')
// let api_secret=config.get('CLOUDINARY_API_SECRET')
cloudinary.config({
    cloud_name: "dhxw6dski",
api_key: "497597419152476",
api_secret: "rOhOYcdpqeFYNR52WFaS9vFFH7U"

})
module.exports=cloudinary