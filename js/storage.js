    class Storage
    {

        static getMoviesFromStorage()
        {
            let movies;
            return localStorage.getItem('movies') === null ? movies = [] : movies = JSON.parse(localStorage.getItem('movies'));
        }

        static addMoviesToStorage(newMovies)
        {
            let movies = this.getMoviesFromStorage();
            movies.push(newMovies);
            localStorage.setItem('movies',JSON.stringify(movies));
        }
    }