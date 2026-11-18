// TÜRKİYE overlay
const openTurkiye = document.getElementById('openTurkiye');
const turkiyeMenu = document.getElementById('turkiyeMenu');
const backTurkiye = document.getElementById('backTurkiye');

if (openTurkiye && turkiyeMenu && backTurkiye) {
  openTurkiye.addEventListener('click', (e) => {
    e.preventDefault();
    istikametMenu.classList.remove('active');
    turkiyeMenu.classList.add('active');
  });

  backTurkiye.addEventListener('click', () => {
    turkiyeMenu.classList.remove('active');
    istikametMenu.classList.add('active');
  });
}

// TÜRKİYE overlay search box
const searchInputTurkiye = document.getElementById('searchInputTurkiye');
const clearBtnTurkiye = document.getElementById('clearBtnTurkiye');
const goBtnTurkiye = document.getElementById('goBtnTurkiye');

if (searchInputTurkiye && clearBtnTurkiye && goBtnTurkiye) {
  searchInputTurkiye.addEventListener('input', () => {
    if (searchInputTurkiye.value.trim() !== "") {
      clearBtnTurkiye.style.display = 'block';
      goBtnTurkiye.style.display = 'none';
    } else {
      clearBtnTurkiye.style.display = 'none';
      goBtnTurkiye.style.display = 'block';
    }
  });

  clearBtnTurkiye.addEventListener('click', () => {
    searchInputTurkiye.value = "";
    clearBtnTurkiye.style.display = 'none';
    goBtnTurkiye.style.display = 'block';
    searchInputTurkiye.focus();
  });
}