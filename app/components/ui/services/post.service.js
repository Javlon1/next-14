export const postService = async (url, endpoint, data) => {
    const fullUrl = `${url}/${endpoint}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
        throw new Error('Error posting data');
    }
};


//
// const endpoint = 'menu';// edit
// const [formData, setFormData] = useState({
//     name: '',
//     tel: '998',
// });

// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// const handleInputChange = (e) => {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//     });
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError(null);

//     try {
//         setLoading(true);

//         const data = await postService(url, endpoint, {
//             name: formData.name,
//             tel: formData.tel,
//         });

//         console.log('Data successfully posted:', data);

//         setFormData({
//             name: '',
//             tel: '998',
//         });
//     } catch (error) {
//         setError(error.message);
//     } finally {
//         setLoading(false);
//     }
// };
//