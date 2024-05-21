import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1';

interface Customer {
  id: string;
  name: string;
  email: string;
}

export const getProfile = async (): Promise<Customer> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  const response = await axios.get<Customer>(`${API_URL}/customer/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.data;
};
