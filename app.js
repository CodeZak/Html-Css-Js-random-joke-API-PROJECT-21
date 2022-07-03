const button = document.querySelector("button");
const content = document.querySelector(".jokeText");

async function getData() {
    content.textContent = "joke loading...";
    try {
        const fetchData = fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
                "User-Agent": "learning app",
            },
        });
        const response = await fetchData;
        console.log(response.ok);
        const data = await response.json();
        content.textContent = data.joke;
        if (!response.ok) {
            throw new Error("error");
        }
    } catch (error) {
        console.log(error.message);
        content.textContent = "There was an error...";
    }
}

button.addEventListener("click", () => {
    getData();
});

getData();
