import axios from 'axios'

export default function getResume () { return axios.get('http://46.101.94.208:8765/resume') }
