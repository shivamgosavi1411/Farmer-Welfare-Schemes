fetch('https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css')
  .then(response => {
    if (response.ok) {
      console.log('Tailwind CSS CDN is accessible');
    } else {
      console.error('Failed to access Tailwind CSS CDN');
    }
  })
  .catch(error => {
    console.error('Network error:', error);
  });