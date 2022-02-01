const form = document.getElementById('film-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');
const moviesList = document.getElementById('films');
const clearButton = document.getElementById('clear-films');

(() => {
    form.addEventListener('submit',addTodo);
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


