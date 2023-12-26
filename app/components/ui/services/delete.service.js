export const deleteService = async (url, endpointDelete, id) => {
    const fullUrl = `${url}/${endpointDelete}/${id}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw new Error('Error deleting data');
    }
};

//
// const [deleteLoading, setDeteleLoading] = useState(false);
// const [deleteError, setDeleteError] = useState(null);
// const endpointDelete = 'menu';// edit

// const handleDelete = async (id) => {
//     setDeleteError(null);

//     try {
//         setDeteleLoading(true);

//         const data = await deleteService(urlContext, endpointDelete, id);

//         console.log('Data successfully deleted:', data);

//         // Дополнительные действия после успешного удаления, если необходимо
//     } catch (error) {
//         setDeleteError(error.message);
//     } finally {
//         setDeteleLoading(false);
//     }
// };
// //

// <button onClick={() => handleDelete(itemId)} disabled={deleteLoading}>
//     {deleteLoading ? 'Deleting...' : 'Delete'}
// </button>

// { deleteError && <p style={{ color: 'red' }}>{deleteError}</p> }