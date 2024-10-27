import { useEffect, useState } from 'react';

const PerfumeAPI = () => {
    const [perfumeData, setPerfumeData] = useState(null);
    const url = 'https://cosmetics-perfume-manufacturing-date-lookup-service.p.rapidapi.com/get_brand_data';

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3405b5087dmsh2d7a258fa7643c8p1b8cf7jsn356c359cb779',
            'x-rapidapi-host': 'cosmetics-perfume-manufacturing-date-lookup-service.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchPerfumeData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log('Full API Response:', result); // Log full response
                setPerfumeData(result);
            } catch (error) {
                console.error('Error fetching perfume data:', error);
            }
        };

        fetchPerfumeData();
    }, []);

    return (
        <div>
            <h1>Perfume Data</h1>
            {perfumeData ? (
                <pre>{JSON.stringify(perfumeData, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PerfumeAPI;
