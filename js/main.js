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


nav_left.innerHTML = '<a href="/index.html"><button class="nav_left_btn" id="home_link_btn"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg><span class="nav_left_btn_content_box_text">ホーム</span></span></button></a><a href="/about.html"><button class="nav_left_btn" id="about_link_btn"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg><span class="nav_left_btn_content_box_text">当サイトについて</span></span></button></a><a href="/cs-windows-software.html"><button class="nav_left_btn" id="link3_link_btn"><span><svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="##5f6368"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>windows [#5f6368]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7439.000000)" fill="#5f6368"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M13.1458647,7289.43426 C13.1508772,7291.43316 13.1568922,7294.82929 13.1619048,7297.46884 C16.7759398,7297.95757 20.3899749,7298.4613 23.997995,7299 C23.997995,7295.84873 24.002005,7292.71146 23.997995,7289.71311 C20.3809524,7289.71311 16.7649123,7289.43426 13.1458647,7289.43426 M4,7289.43526 L4,7296.22153 C6.72581454,7296.58933 9.45162907,7296.94113 12.1724311,7297.34291 C12.1774436,7294.71736 12.1704261,7292.0908 12.1704261,7289.46524 C9.44661654,7289.47024 6.72380952,7289.42627 4,7289.43526 M4,7281.84344 L4,7288.61071 C6.72581454,7288.61771 9.45162907,7288.57673 12.1774436,7288.57973 C12.1754386,7285.96017 12.1754386,7283.34361 12.1724311,7280.72405 C9.44461153,7281.06486 6.71679198,7281.42567 4,7281.84344 M24,7288.47179 C20.3879699,7288.48578 16.7759398,7288.54075 13.1619048,7288.55175 C13.1598997,7285.88921 13.1598997,7283.22967 13.1619048,7280.56914 C16.7689223,7280.01844 20.3839599,7279.50072 23.997995,7279 C24,7282.15826 23.997995,7285.31353 24,7288.47179" id="windows-[#5f6368]"> </path> </g> </g> </g> </g></svg><span class="nav_left_btn_content_box_text">ソフトウェア開発</span></span></button></a>';

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


