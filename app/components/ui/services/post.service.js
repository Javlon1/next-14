export const postService = async (url, endpointPost, data) => {
    const fullUrl = `${url}/${endpointPost}`;

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
// const [formData, setFormData] = useState({
    //     name: '',
    //     tel: '998',
    // });
// const endpointPost = 'menu';// edit

// const [postLoading, setPostLoading] = useState(false);
// const [postError, setPostError] = useState(null);

// const handleInputChange = (e) => {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//     });
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     setPostError(null);

//     try {
//         setPostLoading(true);

//         const data = await postService(url, endpointPost, {
//             name: formData.name,
//             tel: formData.tel,
//         });

//         console.log('Data successfully posted:', data);

//         setFormData({
//             name: '',
//             tel: '998',
//         });
//     } catch (error) {
//         setPostError(error.message);
//     } finally {
//         setPostLoading(false);
//     }
// };
// //

// <button type="submit" disabled={postLoading}>
//     {postLoading ? 'Submitting...' : 'Submit'}
// </button>

// { postError && <p style={{ color: 'red' }}>{postError}</p> }