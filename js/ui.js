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

  
  fetch('/load/links.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    const navLeft = document.getElementById('nav_left');
    if (navLeft) {
      navLeft.innerHTML = html;
    } else {
      console.error('Element with id "nav_left" not found.');
    }
  })
  .catch(error => {
    console.error('Error fetching nav_left.html:', error);
  });

  