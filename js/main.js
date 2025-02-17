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

let nav_v = 0;
const nav_left_c_b_text = document.querySelectorAll('.nav_left_btn_content_box_text');

if (window.location.href.endsWith("index.html")) {
    home_link_btn.style.background = "#e8f0fe";
  }

if (window.location.href.endsWith("about.html")) {
    about_link_btn.style.background = "#e8f0fe";
  }

nav_main.addEventListener('click', () => {
  nav_width();
});


function nav_width()
{
    if(nav_v == 0)
        {
            nav_left.style = "width: 72px";
            nav_left_c_b_text.forEach(nav_left_c_b_text => {
                nav_left_c_b_text.style.display = "none";
            });
    
            nav_v = 1;
        }
    
        else{
    
            nav_left.style = "";
            
            setTimeout(() => {                      
                nav_left_c_b_text.forEach(nav_left_c_b_text => {
                    nav_left_c_b_text.style = "";
                });
              }, "300");
    
            nav_v = 0;
    
        }
    
}


