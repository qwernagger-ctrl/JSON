fetch('movies.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка загрузки файла!');
    }
    return response.json(); // Парсим JSON
  })
  .then(data => {
    const moviesDiv = document.getElementById('movies');
    data.forEach(movie => {
      const item = document.createElement('p');
      item.textContent = `${movie.title} (${movie.year}) — рейтинг: ${movie.rating}`;
      moviesDiv.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
