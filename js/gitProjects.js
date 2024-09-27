fetch('https://api.github.com/users/LeandroSD/repos')
  .then(response => response.json())
  .then(data => {
    const projectList = document.getElementById('github-projects');

    
    const selectedIndices = [0, 2, 5];

    selectedIndices.forEach(index => {
      const repo = data[index]; 

      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description available'}</p>
        <button onclick="window.open('${repo.html_url}', '_blank')">
          <span>View on GitHub</span>
        </button>
      `;
      projectList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching repos:', error));
