const axios = require('axios');
const { google } = require('googleapis');

async function uploadFileToDrive(url, folderId,auth) {
    const drive = google.drive({ version: 'v3', auth });

    const fileId = url.match(/[-\w]{25,}/)?.[0];
    if (!fileId) {
        throw new Error('Invalid URL format');
    }

    const { data: fileMetadata } = await drive.files.get({
        fileId,
        fields: 'name,mimeType',
    });

    const file = await axios({
        method: 'get',
        url: `https://drive.google.com/uc?id=${fileId}&export=download`,
        responseType: 'stream',
    });

    const media = {
        mimeType: fileMetadata.mimeType,
        body: file.data,
    };

    const fileMetadataWithParents = {
        ...fileMetadata,
        parents: [folderId],
    };

    const { data: uploadedFile } = await drive.files.create({
        resource: fileMetadataWithParents,
        media,
        fields: 'id',
    });

    console.log(`File ${fileMetadata.name} uploaded to ${uploadedFile.id}`);
}


async function find_folder_by_name(folder_name, auth) {
    const drive = google.drive({ version: 'v3', auth });

    // Search for the folder by name and get its ID
    const folderQuery = `mimeType='application/vnd.google-apps.folder' and name='${folder_name}'`;

    const folderResponse = await drive.files.list({
        q: folderQuery,
        fields: 'files(id)',
        spaces: 'drive',
        auth: auth,
    })

    if (folderResponse.data.files.length === 0) {
        throw new Error(`No folder found for ${Class}`);
    }
    return folderResponse.data.files[0].id;
}



module.exports = {
    uploadFileToDrive,
    find_folder_by_name,
}