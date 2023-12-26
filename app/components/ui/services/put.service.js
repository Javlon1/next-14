export const putService = async (url, endpointPut, id, data) => {
    const fullUrl = `${url}/${endpointPut}/${id}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'PUT',
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
        console.error('Error updating data:', error);
        throw new Error('Error updating data');
    }
};

//
// const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     tel: '998',
// });

// const [putLoading, setLoading] = useState(false);
// const [putError, setError] = useState(null);
// const endpointPut = 'menu'; // edit

// const handleInputChange = (e) => {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//     });
// };

// const handleUpdate = async () => {
//     setError(null);

//     try {
//         setLoading(true);

//         const data = await putService(urlContext, endpointPut, formData.id, {
//             name: formData.name,
//             tel: formData.tel,
//         });

//         console.log('Data successfully updated:', data);

//         // Дополнительные действия после успешного обновления, если необходимо
//     } catch (error) {
//         setError(error.message);
//     } finally {
//         setLoading(false);
//     }
// };
// //
// <button onClick={handleUpdate} disabled={putLoading}>
// {putLoading ? 'Updating...' : 'Update'}
// </button>

// {putError && <p style={{ color: 'red' }}>{putError}</p>}