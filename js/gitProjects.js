// Função para buscar projetos do GitHub
async function fetchGitHubProjects() {
  const username = 'LeandroSD'; // Seu nome de usuário no GitHub
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const projects = await response.json();

  const projectList = document.getElementById('github-projects');

  // Índices dos projetos que você deseja exibir
  const selectedIndices = [0, 2, 5]; // Exemplo: mostre apenas os projetos nos índices 0, 2 e 5

  // Filtra os projetos com base nos índices selecionados
  selectedIndices.forEach((index, i) => {
    if (projects[index]) {
      const isActive = i === 0 ? 'active' : ''; // Define o primeiro slide como ativo
      const project = projects[index];
      const carouselItem = `
        <div class="carousel-item ${isActive}">
          <div class="d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                <p class="card-text">${project.description || 'No description available'}</p>
                <button class="btn btn-primary" onclick="window.open('${project.html_url}', '_blank')">
                  <span>View Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      projectList.insertAdjacentHTML('beforeend', carouselItem);
    }
  });
}

// Chama a função para carregar os projetos
fetchGitHubProjects();
