function getRecord(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => {
        if(response === 404) {
            throw new Error("Запись не найдена");
        }
        return response.json();
    })
};