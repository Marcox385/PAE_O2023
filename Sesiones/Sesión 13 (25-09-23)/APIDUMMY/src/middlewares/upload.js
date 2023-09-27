const multer = require('multer');
const fs = require('fs');
const path = require('path');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {       // Dónde se guardarán el/los archivo(s)
        if (!fs.existsSync(path.join(__dirname, '..', '..', 'uploads'))) {
            console.log('Directory is non-existant! Creating it...');
            fs.mkdirSync(path.join(__dirname, '..', '..', 'uploads'));
        }
        
        cb(null, 'uploads');
    },

    filename: (req, file, cb) => {          // Nombre del/los archivo(s)
        const ext = file.originalname.split('.').pop();
        const name = new Date().getTime() + '.' + ext;
        cb(null, name);
    }
});

// Para filtrar ciertos tipos de archivo (solo jpg)
const fileFilter = (req, file, cb) => {
    const name = file.originalname;
    const parts = name.split('.');
    // const ext = parts[parts.length - 1];
    const ext = parts.pop();
    const flag = ext.toLowerCase() === 'jpg';

    cb(null, flag);
};

// Para permitir todo tipo de imágenes
const imageFilter = (req, file, cb) => {
    const flag = file.mimetype.startsWith('image/');

    cb(null, flag);
};

const upload = multer({storage: diskStorage, fileFilter: imageFilter});

module.exports = upload;
