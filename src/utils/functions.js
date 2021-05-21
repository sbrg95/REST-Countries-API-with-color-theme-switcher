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

export function fetchCountries() {
  const url = 'https://restcountries.eu/rest/v2/all';

  return fetch(url).then(async (response) => {
    const countries = await response.json();
    return countries;
  });
}

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function paginateArray(array, limit) {
  const paginated = [];
  const maxPages = Math.ceil(array.length / limit);
  let current = { page: 1, data: [] };

  if (array.length === 0) {
    return [current];
  }

  array.forEach((item, index) => {
    current.data = [...current.data, item];
    if ((index + 1) % limit === 0) {
      paginated.push(current);
      current = { page: current.page + 1, data: [] };
    }
  });

  if (current.page === maxPages) {
    paginated.push(current);
  }

  return paginated;
}
