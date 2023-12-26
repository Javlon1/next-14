export const getService = async (endpointGet, url) => {

    const fullUrl = `${url}/${endpointGet}`;

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
// const endpointGet = 'menu';// edit

// React.useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const result = await getService(endpointGet, url);
//             setData(result); // edit
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     fetchData();
// }, []);
//