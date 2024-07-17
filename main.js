document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const lightThemeIcon = 'script/light.png';
  const darkThemeIcon = 'script/dark.png';

  // Проверяем, сохранен ли режим темной темы в localStorage
  const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';

  if (isDarkTheme) {
    document.body.classList.add('dark');
    themeSwitcher.src = lightThemeIcon;
  } else {
    themeSwitcher.src = darkThemeIcon;
  }

  themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      themeSwitcher.src = lightThemeIcon;
      localStorage.setItem('isDarkTheme', true);
    } else {
      themeSwitcher.src = darkThemeIcon;
      localStorage.setItem('isDarkTheme', false);
    }
  });
});
