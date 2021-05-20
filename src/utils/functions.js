export function getTheme(theme) {
  return {
    name: theme,
    color: {
      background: theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',
      element: theme === 'light' ? '#fff' : 'hsl(209, 23%, 22%)',
      text: theme === 'light' ? 'hsl(200, 15%, 8%)' : '#fff',
      input: theme === 'light' ? 'hsl(0, 0%, 52%)' : '#fff',
      strok: theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(207, 26%, 17%)',
    },
  };
}

export function fetchCountries(region) {
  const url = region
    ? `https://restcountries.eu/rest/v2/region/${region}`
    : 'https://restcountries.eu/rest/v2/all';

  return fetch(url).then(async (response) => {
    const countries = await response.json();
    return countries;
  });
}

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
