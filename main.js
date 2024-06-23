'use strict';
 {

  const thumbnails = document.querySelectorAll('.thumbnail');
  // 変数の付け方はGoogleのスタイルガイドに従い、単語を繋げる場合は後ろにつながる単語の先頭を大文字にする。HTML, CSSのときのように - で繋がない。
  const mainImage = document.getElementById('main-image');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  // const prev = document.getElementById('prev');
  // 今表示されている画像を変数で管理する
  let activeIndex = 0;

  thumbnails[0].addEventListener('click', () => {
    activeIndex = 0;
    mainImage.src = thumbnails[0].src;
    thumbnails[0].classList.add('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
  });
  thumbnails[1].addEventListener('click', () => {
    activeIndex = 1;
    mainImage.src = thumbnails[1].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.add('active');
    thumbnails[2].classList.remove('active');
  });
  thumbnails[2].addEventListener('click', () => {
    activeIndex = 2;
    mainImage.src = thumbnails[2].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.add('active');
  });

  next.addEventListener('click', () => {
    activeIndex++;
    if (activeIndex > 2) {
      activeIndex = 0;
    }
    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  });
  prev.addEventListener('click', () => {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = 2;
    }
    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  });
}