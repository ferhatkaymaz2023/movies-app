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

        static showAlert(type,message)
        {
            const cardBody = document.querySelectorAll('.card-body')[0];
            const alert = document.createElement('div');
            alert.className = `alert alert-${type}`;
            alert.textContent = message;

            cardBody.appendChild(alert);

            setTimeout(() => {
                alert.remove();
            },1500);

        }

        static clearInputs(element1,element2,element3)
        {
            element1.value = '';
            element2.value = '';
            element3.value = '';
        }
        
    }