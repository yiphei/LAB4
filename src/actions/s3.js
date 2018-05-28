import axios from 'axios';

const ROOT_URL = 'https://lab4cs52.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';


function getSignedRequest(file) {
  const fileName = encodeURIComponent(file.name);
  console.log('In getSignedRequest');
  // hit our own server to get a signed s3 url
  return axios.get(`${ROOT_URL}/sign-s3?file-name=${fileName}&file-type=${file.type}`);
}

function uploadFileToS3(signedRequest, file, url) {
  return new Promise((fulfill, reject) => {
    axios.put(signedRequest, file, { headers: { 'Content-Type': file.type } }).then((response) => {
      fulfill(url);
    }).catch((error) => {
      reject(error);
    });
  });
}


export function uploadImage(file) {
  console.log('IN uploadimage');
  // returns a promise so you can handle error and completion in your component
  return getSignedRequest(file).then((response) => {
    return uploadFileToS3(response.data.signedRequest, file, response.data.url);
  });
}
