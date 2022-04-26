import config from '../../config';

/**
 Defines an API class for handling all the API request in one place.
 We can extend this class later for other API methods as well
 */
export default class Api {
  constructor() {
    this.baseURL = config.API_URL;
  }

  getUrl(context) {
    return `${this.baseURL}${context}`;
  }

  // Handle GET API request
  async get(context) {
    const response = await fetch(this.getUrl(context), {
      method: 'GET',
      redirect: 'follow',
    });
    return checkValidResponse(response);
  }
}

const checkValidResponse = async response => {
  const res = await response.json();
  if (!response || !response.ok) {
    throw new Error(res.message, response.status, res.errorCode);
  }
  return res;
};
