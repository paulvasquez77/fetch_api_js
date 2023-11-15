const getCharacters = (done) => {
    const results = fetch('https://rickandmortyapi.com/api/character');
    results
        .then(response => response.json())
        .then(data => done(data))
}

getCharacters(data =>
    data.results.map(personaje => {
        const article = document.createRange().createContextualFragment(`
        <article>
            <div>
                <img src=${personaje.image} alt=${personaje.image}>
            </div>
    
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        `)

        const main = document.querySelector('main')
        main.append(article)
    })
)