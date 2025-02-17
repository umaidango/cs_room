document.addEventListener('DOMContentLoaded', () => {
    fetch('/load/header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('header_main').innerHTML = html;
        // HTML の挿入後にイベントリスナーを設定
        document.getElementById('header_main').addEventListener('click', () => {
          // イベント処理
        });
      });
  });
  

let nav_v = 0;
const nav_left_c_b_text = document.querySelectorAll('.nav_left_btn_content_box_text');

if (window.location.href.endsWith("index.html")) {
    home_link_btn.style.background = "#e8f0fe";
  }

if (window.location.href.endsWith("about.html")) {
    about_link_btn.style.background = "#e8f0fe";
  }


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


