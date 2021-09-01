import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 6000,
});

http.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response)
);

// http.interceptors.request.use((config) => {
//     config.headers.authorization = `Bearer ${getToken()}`
//     return config
//   }
// );

// export const login = (creds) => http.post('/api/auth/login', { name: creds.name, password: creds.password })
//
// export const silentLogin = () => http.post('/api/auth/silent-login', {})
//
// export const register = (creds) => http.post('/api/auth/register', { name: creds.name, password: creds.password })

export const uploadSong = async (data) => {
  return await http.post('/api/upload', data.file, {
    onUploadProgress: function (progressEvent) {
      let percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      data.setUploadProgress(percentCompleted);
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
};

export const getSongs = () => http.get('/api/user/songs')