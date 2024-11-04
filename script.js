async function get() {
    try {
        const getResponse = await fetch('http://localhost:8080/');
        if (!getResponse.ok) throw new Error(`GET request failed: ${getResponse.status}`);
        const getData = await getResponse.json();
        console.log("GET Response:", getData);

        const postResponse = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: "outfithub2024@gmail.com", password: "111111" })
        });

        if (!postResponse.ok) throw new Error(`POST request failed: ${postResponse.status}`);
        const postData = await postResponse.json();
        console.log("POST Response:", postData);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

get();
