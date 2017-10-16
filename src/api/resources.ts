import axios from 'axios'

export default function getResume() { return axios.get('http://localhost:51376/api/resume/dfcook') }
