export const getService = async (endpoint, url) => {

    const fullUrl = `${url}/${endpoint}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Error fetching data');
    }
};

//
// const [data, setData] = React.useState(); // edit
// const endpoint = 'menu';// edit

// React.useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const result = await getService(endpoint, url);
//             setData(result); // edit
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     fetchData();
// }, []);
//