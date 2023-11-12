import { useState, useEffect } from "react";

const API_URL = "http://localhost:3002/destinations";


function useFetchFavourite() {
    const [destinations, setDestinations] = useState([]);
    const [error, setError] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const destinationsData = await response.json();
                const favourites = destinationsData.filter(d => d.favourite === true)
                setDestinations(favourites);

                setLoading(false);
            } catch (error) {
                setError("Eroare 888");

                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { destinations, loading, error, setError };
}

export default useFetchFavourite;
