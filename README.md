# Node-Google-Drive-Integration
This repository hosts a Node.js application that simplifies file uploads to Google Drive using the Google Drive API. It allows users to effortlessly upload files to designated folders within their Google Drive accounts. The application is highly customizable and serves as a versatile base for seamlessly integrating Google Drive functionality into various projects.

## Getting Started
1. Clone This repository to your local machine:
```bash
git clone https://github.com/lokmanzeddoun/Node-Google-Drive-Integration/
```
2. Navigate to the project directory:
```bash
cd your-repo
```
3. Install the dependencies
```bash
npm install
```
## Obtain Google API Credentials

To use this application, you'll need to set up Google API credentials:

1. Go to the [Google Developers Console](https://console.developers.google.com/).

2. Create a new project or select an existing one.

3. Enable the "Google Drive API" for your project.

4. Create a service account:
   - In the Google Developers Console, navigate to the "Credentials" section.
   - Click on "Create credentials" and select "Service account key."
   - Follow the prompts to create a new service account.
   - Download the JSON credentials file (e.g., `googlekey.json`) associated with the service account.

5. Place the `googlekey.json` file in the root directory of this project.

Now you have the necessary API credentials to interact with Google Drive using this application.
## Start the App:
```bash
npm start
```
#### You're ready to use the app for uploading files to Google Drive!

### Built With :
* [![Node.js][node.js]][node.js-url]
* [![Express.js][express.js]][express.js-url]
* [![Google Drive][googledrive]][googledrive-url]  













[node.js]:https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node.js-url]:https://nodejs.org/en
[express.js]:https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[express.js-url]:https://expressjs.com/
[googledrive]:https://img.shields.io/badge/google%20drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white
[googledrive-url]:https://drive.google.com/

