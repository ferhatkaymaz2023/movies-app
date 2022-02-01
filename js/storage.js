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

        static deleteMoviesFromStorage(deleteTodo)
        {
            let movies = this.getMoviesFromStorage();

            movies.forEach( (movie,index) => {
                if(movie.title === deleteTodo)
                {
                    movies.splice(index,1);
                }
            });

            localStorage.setItem('movies',JSON.stringify(movies));
        }

        static clearAllMoviesFromStorage()
        {
            localStorage.removeItem('movies');
        }
    

    }