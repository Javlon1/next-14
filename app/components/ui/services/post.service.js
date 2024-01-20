// const endpointPost = 'register';// edit
// const fullUrl = `${urlApi}/${endpointPost}/`;
// try {
//     const response = await fetch(fullUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
                        // 'Authorization': `Token ${auth_token}`,
//         },
//         body: JSON.stringify({
//             email: formData.email,
//             password: formData.password,
//         }),
//     });

//     setFormData({
//         email: '',
//         password: '',
//         password2: '',
//     });

//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     } else if (response.ok) {
//         router.push('/register-success');
//     }

//     const data = await response.json();
//     console.log('Response data:', data);
// } catch (error) {
//     console.error('Error during POST request:', error);
// }