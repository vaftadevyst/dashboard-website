var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  }
  else {
    localStorage.setItem("theme", "light");
  }
}

if(localStorage.getItem("theme") == "light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} 
else if(localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else {
  localStorage.setItem("theme", "light");
}

document.querySelector('#search-text').addEventListener('input', filterList);

function filterList(){
  const searchInput = document.querySelector('#search-text');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll('.post-container');

  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())){
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  })
}

const shortcutContent = document.getElementsByClassName('shortcut-links'),
      shortcutHeader = document.querySelectorAll('.shortcut-header')

function toggleShortcut(){
  let itemClass = this.parentNode.className

  for(i = 0; i < shortcutContent.length; i++){
    shortcutContent[i].className = 'shortcut-links skills__close'
  }
  if(itemClass === 'shortcut-links skills__close'){
    this.parentNode.className = 'shortcut-links skills__open'
  }
}

shortcutHeader.forEach((el) =>{
  el.addEventListener('click', toggleShortcut)
})

const skillsContent = document.getElementsByClassName('skills-links'),
      skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills-links skills__close'
  }
  if(itemClass === 'skills-links skills__close'){
    this.parentNode.className = 'skills-links skills__open'
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})