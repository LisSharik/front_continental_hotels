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

export const createData = async (apiUrl: string, payload: any) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error("Failed to create data");
        }
        return response.json();
    } catch (error) {
        console.error("Error creating data:", error);
        throw error;
    }
};

export const updateData = async (apiUrl: string, id: number, payload: any) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
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

export const deleteData = async (apiUrl: string, id: number) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete data");
        }
        return response.json();
    } catch (error) {
        console.error("Error deleting data:", error);
        throw error;
    }
};
