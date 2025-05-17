// Load sidebar content
fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
    // Highlight active link
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.parentElement.classList.add('active');
      }
    });
  })
  .catch(error => console.error('Error loading sidebar:', error));