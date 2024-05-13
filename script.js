fetch ('./sample.json')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(post => {
            const markup = `<li>${post.id}</li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
        })
    })
    .catch(error => console.log(error));
