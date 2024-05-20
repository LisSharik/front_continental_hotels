export const fetchData = async (apiUrl: string, page: number, pageSize: number) => {
    try {
      const response = await fetch(`${apiUrl}?page=${page}&size=${pageSize}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  
  export const createData = async (url: string, data: any) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error creating data: ${JSON.stringify(errorData)}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error creating data:', error);
      throw error;
    }
  };
  
  
  export const updateData = async (apiUrl: string, payload: any) => {
    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      return response.json();
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  };
  
  export const deleteData = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
  
      const responseText = await response.text();
      if (responseText) {
        return JSON.parse(responseText);
      }
      return null;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  };
  