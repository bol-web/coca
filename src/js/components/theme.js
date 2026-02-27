export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');

  const themeTargetDataset = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;

  if (theme === 'dark') {
    themeSwitcher.checked = true;
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme == 'light') {
      themeTargetDataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};

// const switcher = document.querySelector('[data-theme-switcher]');
//   const modeTheme = document.querySelector('[data-theme]');

//   switcher.addEventListener('change', () => {
//     if (modeTheme.dataset.theme === 'light') {
//       modeTheme.dataset.theme = 'dark';
//     } else {
//       modeTheme.dataset.theme = 'light';
//     }
//   });
