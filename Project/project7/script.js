const links = document.querySelectorAll('nav a');
    const currentUrl = window.location.href;

    // Add 'active' class to the link matching the current URL
    links.forEach(link => {
      if (link.href === currentUrl) {
        link.classList.add('active');
      }
    });
  