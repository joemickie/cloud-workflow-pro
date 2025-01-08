import axios from 'axios';
import { env } from '../config/env';

export const maps = {
  async getLocation(address: string) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${env.GOOGLE_MAPS_API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  },
};
