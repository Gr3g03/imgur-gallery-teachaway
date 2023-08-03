import axios from "axios";
import apiRoutes from "../apiRoutes";
import { IImgurImages } from "../interfaces/IImgurImage";
// import { IImgurImage } from "../interfaces/IImgurImage";
const clientId = process.env.REACT_APP_IMGUR_CLIENT_ID;

export type requestBody = {
  itemsPerPage : number ,
  currentPage : number
};

export async function fetchImgurGallery(section: string, sort: string, window: string, requestBody: requestBody): Promise<IImgurImages[]> {

  try {
    const response = await axios.post(`${apiRoutes.baseUrl.baseUrl}/${section}/${sort}/${window}`, requestBody, {
      
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch.`);
  }
}
