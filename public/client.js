var loadingScreen = document.querySelector("#loadingScreen");

window.addEventListener('load', function() { // cool smooth loading screen, it adds a class to it.
  loadingScreen.classList.add("fade-in");})

document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // stop instant navigation
          const href = link.href;

          loadingScreen.classList.remove('fade-in');
          loadingScreen.classList.add('fade-out');

          setTimeout(() => {
              window.location.href = href;
          }, 500); // match your CSS transition duration
      });
  });
