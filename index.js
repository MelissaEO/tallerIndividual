async function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const date = document.getElementById("date").value;
    const form = {
        name: name, surname: surname, date: date
    };
    
    try {
        // Default options are marked with *
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
    
        console.log(await response.json())
        
    } catch (error) {
        console.log(error);
    }

}

