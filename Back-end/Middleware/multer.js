import multer from "multer";
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'images');
    },
    filename:(req,file,cb) =>{
        cb(null, `${file.originalname}`);
    }
});


const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload= multer({storage:storage,fileFilter:fileFilter});
export default upload;