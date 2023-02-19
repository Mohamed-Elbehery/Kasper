//! Increase Numbers On Scrolling
  // Vars
  let statsSection = document.querySelector('.stats');
  let nums = document.querySelectorAll('.number');
  let started = false; // Function Started ? No

  window.addEventListener('scroll', () => {
    if(window.scrollY >= statsSection.offsetTop - 640) {
      if(!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  })

  // Functions
  function startCount(el) { // el stands for element
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
      el.textContent++;
      if(el.textContent == goal) {
        clearInterval(counter);
      }
    }, 2000 / goal);
  }

//! Animate Width On Scrolling
  // Vars
  let skillsSection = document.querySelector('.our-skills');
  let spans = document.querySelectorAll('.prog span');

  // Action
  window.addEventListener('scroll', () => {
    if(window.scrollY >= skillsSection.offsetTop - 700) {
      spans.forEach((span) => {
        span.style.width = span.dataset.progress;
      });
    }
  })

//! Filter Images
  // Vars
  let filterLis = document.querySelectorAll('.portfolio .shuffle li');
  let imgs = document.querySelectorAll('.portfolio .box');
  let imgsHolder = document.querySelector('.imgs-container');

  // Event Listeners
  filterLis.forEach((li) => {
    li.addEventListener('click', removeActive);
    li.addEventListener('click', manageImages);
  });

  // Functions
  function removeActive() {
    filterLis.forEach((li) => {
      li.classList.remove('active');
      this.classList.add('active');
    })
  }

  function manageImages() {
    // centering the images
    if(this.dataset.category !== '.all') {
      imgsHolder.style.cssText = 'justify-content: center; gap: 30px;';
    } else { // making sure that the all doesn't have gap between the images
      imgsHolder.style.cssText = 'gap: 0;';
    }
    // displaying images
    imgs.forEach((img) => {
      img.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.category).forEach((el) => {
      el.style.display = 'flex';
    });
  }