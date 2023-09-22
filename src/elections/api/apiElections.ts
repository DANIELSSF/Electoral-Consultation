import axios from 'axios';
import { getEnvironments } from '../../helpers/getEnvironments';

const { VITE_BASE_URL } = getEnvironments();

export const apiElections = axios.create({
  baseURL: VITE_BASE_URL,
});
