class ApiService {
  static BASE_URL = process.env.REACT_APP_API_BASE_URL;

  static async get(endpoint: string) {
    const url = `${ApiService.BASE_URL}${endpoint}`;

    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('An error occurred while making the GET request:', error);
      throw error;
    }
  }

  // Add other HTTP methods like PUT, PATCH, DELETE as needed
}

export default ApiService;
