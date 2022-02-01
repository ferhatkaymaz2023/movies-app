const form = document.getElementById('film-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');
const moviesList = document.getElementById('films');
const clearButton = document.getElementById('clear-films');
const secondCardBody = document.querySelectorAll('.card-body')[1];

(() => {
    form.addEventListener('submit',addTodo);
    document.addEventListener('DOMContentLoaded',loadAllMovies);
    secondCardBody.addEventListener('click',deleteMovies);
    clearButton.addEventListener('click',clearAllMovies);
})();


function addTodo(e)
{
    const title = titleElement.value.trim();
    const director = directorElement.value.trim();
    const url = urlElement.value.trim();

    if(title === '' || director === '' || url === '')
    {
        UI.showAlert('danger','Empty Input');
    }
    else 
    {
        const movies = new Movies(title,director,url);
        UI.addFilmToUI(movies);
        Storage.addMoviesToStorage(movies);
        UI.showAlert('success','Succeeded ');
    }


    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function loadAllMovies()
{
    let movies = Storage.getMoviesFromStorage();
    movies.forEach(movies => UI.addFilmToUI(movies));
}


function deleteMovies(e)
{

    e.target.id === 'delete-film' && UI.deleteMoviesFromUI(e.target.parentElement.parentElement) || Storage.deleteMoviesFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
}


function clearAllMovies()
{
    UI.clearAllMoviesFromUI();
    Storage.clearAllMoviesFromStorage();
}