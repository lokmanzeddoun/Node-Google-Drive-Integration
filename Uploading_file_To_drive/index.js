const express = require('express')
const bodyparser = require('body-parser').urlencoded({ extended: true });
const cors = require('cors')
const morgan = require('morgan')
const { google } = require('googleapis')
const app = express()
const dotenv = require('dotenv')
const uploadFileToDrive = require('./utils/uploadFileToDrive')



dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyparser);
morgan.token("post", (req, res) => {
    if (req.method === "POST") return JSON.stringify(req.body);
    else return "";
});

morgan.format(
    "postFormat",
    ":method :url :status :res[content-length] - :response-time ms | :post"
);

app.use(morgan("postFormat"));

const authenticateGoogle = () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: ``,
        scopes: "https://www.googleapis.com/auth/drive",
    });
    return auth;
};







app.post('/upload', async (req, res, next) => {
    const folder_name = req.body.folder;
    const fileUrl = req.body.file_url;
    try {
        const auth = authenticateGoogle();
        console.log(auth)
        const folderId = await uploadFileToDrive.find_folder_by_name(folder_name, auth);
        uploadFileToDrive.uploadFileToDrive(fileUrl, folderId, auth);
    } catch (err) {
        res.status(500).send('Error uploading file to Google Drive');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

