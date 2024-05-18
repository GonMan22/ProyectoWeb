const getMovies = async () => {
    try {
        const MOVIES_ROUTE = './../movies.json';
        const DATA = await fetch(MOVIES_ROUTE);
        const RES = await DATA.json();
        return RES;
    } catch (error) {
        error = 'No se pudo traer las peliculas';
        console.log(error)
    }
}

const printMovies = async () => {
    try {
        const DATA = await getMovies();
    const CATALOGUE = document.querySelector('.catalogue');
    const FRAGMENT = document.createDocumentFragment();
    console.log(DATA) // => es un objeto

    const movies = document.querySelector('#movies');
    const series = document.querySelector('#series');

    if(movies){
        DATA.movies.forEach((movie) => {
            const ARTICLE = document.createElement('article');
            const FIGURE = document.createElement('figure');
            const IMAGE = document.createElement('img');
            const PARAGRAPH = document.createElement('p');
    
            ARTICLE.classList.add('card');
            FIGURE.classList.add('post');
            IMAGE.src = movie.img;
            PARAGRAPH.textContent = movie.title;
            PARAGRAPH.classList.add('max_text');
    
            FIGURE.appendChild(IMAGE);
            ARTICLE.append(FIGURE, PARAGRAPH);
    
            FRAGMENT.appendChild(ARTICLE);
    
        });
    } else if(series){
        DATA.series.forEach((movie) => {
            const ARTICLE = document.createElement('article');
            const FIGURE = document.createElement('figure');
            const IMAGE = document.createElement('img');
            const PARAGRAPH = document.createElement('p');
    
            ARTICLE.classList.add('card');
            FIGURE.classList.add('post');
            IMAGE.src = movie.img;
            PARAGRAPH.textContent = movie.title;
            PARAGRAPH.classList.add('max_text');
    
            FIGURE.appendChild(IMAGE);
            ARTICLE.append(FIGURE, PARAGRAPH);
    
            FRAGMENT.appendChild(ARTICLE);
    
        });

    }

    CATALOGUE.appendChild(FRAGMENT);
        
    } catch (error) {
        console.log('todo ok')        
    }
}
printMovies()