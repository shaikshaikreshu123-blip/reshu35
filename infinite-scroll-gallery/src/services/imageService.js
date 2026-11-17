import axios from "axios";

const API_URL = "https://picsum.photos/v2/list";

export const fetchImages = async (page) => {
  const response = await axios.get(API_URL, {
    params: {
      page,
      limit: 10,
    },
  });

  return response.data;
};