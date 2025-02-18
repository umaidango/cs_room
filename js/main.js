document.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    fetch('/load/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      }),
    fetch('/load/links.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
  ])
    .then(([headerHtml, linksHtml]) => {
      document.getElementById('header_main').innerHTML = headerHtml;
      document.getElementById('nav_left').innerHTML = linksHtml;

      // イベントリスナーは HTML 挿入後に設定
      document.getElementById('header_main').addEventListener('click', () => {
        // イベント処理
      });
      document.getElementById('nav_left').addEventListener('click', () => {
        // イベント処理
      });
    })
    .catch(error => {
      console.error('Error loading HTML:', error);
      // エラーメッセージを表示するなど、適切な処理を行う
    });
});



let nav_v = 0;
const nav_left_c_b_text = document.querySelectorAll('.nav_left_btn_content_box_text');




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


