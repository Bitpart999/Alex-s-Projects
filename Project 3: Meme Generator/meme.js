document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('meme-form');
  const memeContainer = document.getElementById('meme-container');
  let memes = JSON.parse(localStorage.getItem('memes')) || [];

  // Render stored memes on page load
  memes.forEach(memeData => createMeme(memeData));

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const imgUrl = document.getElementById('meme-img').value.trim();
    const topText = document.getElementById('top-text').value.trim();
    const bottomText = document.getElementById('bottom-text').value.trim();

    if (!imgUrl || !topText || !bottomText) {
      alert("Please fill in all fields.");
      return;
    }

    const memeData = { imgUrl, topText, bottomText };
    memes.push(memeData);
    localStorage.setItem('memes', JSON.stringify(memes));

    createMeme(memeData);

    form.reset();
  });

  memeContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
      const memeDiv = e.target.parentElement;
      const index = Array.from(memeContainer.children).indexOf(memeDiv);
      memes.splice(index, 1);
      localStorage.setItem('memes', JSON.stringify(memes));
      memeDiv.remove();
    }
  });

  function createMeme({ imgUrl, topText, bottomText }) {
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = 'Meme Image';

    const topCaption = document.createElement('div');
    topCaption.classList.add('top-text');
    topCaption.innerText = topText;

    const bottomCaption = document.createElement('div');
    bottomCaption.classList.add('bottom-text');
    bottomCaption.innerText = bottomText;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';

    memeDiv.appendChild(img);
    memeDiv.appendChild(topCaption);
    memeDiv.appendChild(bottomCaption);
    memeDiv.appendChild(deleteBtn);

    memeContainer.appendChild(memeDiv);
  }
});
