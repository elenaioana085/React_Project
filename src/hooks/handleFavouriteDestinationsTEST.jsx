import { useState, useEffect } from "react";

const API_URL = "http://localhost:3002/users";



function useFetchPackagesByUser() {
    const [destinationsByUser, setPackagesByUser] = useState([]);
    const [error, setError] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const destinationsByUserData = await response.json();
                setPackagesByUser(destinationsByUserData);

                setLoading(false);
            } catch (error) {
                setError("Eroare 888");

                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { destinationsByUser, loading, error, setError };
}

export default useFetchPackagesByUser;
