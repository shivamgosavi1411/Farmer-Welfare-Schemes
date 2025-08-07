function toggleFAQ(button) {
  const content = button.nextElementSibling;
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    button.classList.add('bg-gray-200');
  } else {
    content.classList.add('hidden');
    button.classList.remove('bg-gray-200');
  }
}