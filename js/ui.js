    class UI 
    {
        static addFilmToUI(movies)
        {
            const moviesList  = document.getElementById('films');

            moviesList.innerHTML += `
            <tr>
                <td><img width='250'  height='100'  src="${movies.url}" class="img-fluid img-thumbnail"></td>
                <td>${movies.title}</td>
                <td>${movies.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
            `;
        }
        
    }