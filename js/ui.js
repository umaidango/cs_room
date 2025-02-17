fetch('/load/header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    const headerMain = document.getElementById('header_main');
    if (headerMain) {
      headerMain.innerHTML = html;
    } else {
      console.error('Element with id "header_main" not found.');
    }
  })
  .catch(error => {
    console.error('Error fetching header.html:', error);
  });

  