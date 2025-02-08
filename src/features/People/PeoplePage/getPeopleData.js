import axios from "axios";
import { apiKey, apiUrl } from "../../../api";

export const getPeopleDetails = async (peopleId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/person/${peopleId}?language=en-US&api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch movie details: ${error.message}`);
    throw error;
  }
};
