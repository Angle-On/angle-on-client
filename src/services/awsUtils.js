/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
import axios from 'axios';

export const singleFileUploadHandler = ({ selectedFile }) => {
  console.log(selectedFile, 'single file upload aws');
  const data = new FormData(); // If file selected
  const DEVURL = 'https://angle-on.herokuapp.com';
  const URL = DEVURL;

  if (selectedFile) {
    data.append('profileImage', selectedFile, selectedFile.name);
    axios
      .post(`${URL}/api/v1/images/img-upload`, data, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          'Access-Control-Allow-Origin': '*'
        },
      })
      .then((response) => {
        if (200 === response.status) {
          // If file size is larger than expected.
          if (response.data.error) {
            if ('LIMIT_FILE_SIZE' === response.data.error.code) {
              console.log('error');
            } else {
              console.log(response.data); // If not the given file type
            }
          } else {
            // Success
            const fileName = response.data;
            console.log('HELLO FILENAME', fileName);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    // if file not selected throw error
    console.log('no file detected');
  }
};
