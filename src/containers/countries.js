import { useState } from 'react';
import { Card, CardList, Filters, LoadPage } from '../components';
import { formatNumber, paginateArray } from '../utils/functions';

export default function Countries({ countries }) {
  const { data, status, error } = countries;
  const [region, setRegion] = useState('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 8;

  if (status === 'pending' || status === 'idle') {
    return <div>Loading</div>;
  }

  if (status === 'error') {
    throw error;
  }

  function handleRegion(region) {
    setPage(1);
    setRegion(region);
  }

  function handleSearch(event) {
    setPage(1);
    setSearch(event.target.value);
  }

  const options = [
    { value: 'all', label: 'All Regions' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  const filtredResult = data.filter((country) => {
    let filters = { region: true, search: true };
    if (region !== 'all') {
      filters.region = country.region === region;
    }

    if (search) {
      filters.search = country.name
        .toLowerCase()
        .includes(search.toLowerCase());
    }

    return filters.region && filters.search;
  });

  const totalPages = Math.ceil(filtredResult.length / limit);
  const paginatedResult = paginateArray(filtredResult, limit);

  let finalResult = [];

  for (let i = 0; i < page; i++) {
    finalResult = [...finalResult, ...paginatedResult[i].data];
  }
  function loadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <Filters>
        <Filters.Search
          type='text'
          value={search}
          onChange={handleSearch}
          placeholder='Search for a country...'
        />
        <Filters.Select
          options={options}
          value={region}
          setValue={handleRegion}
          label='Filter by Region'
        />
      </Filters>
      {finalResult.length === 0 ? (
        <h2 style={{ textAlign: 'center' }}>No Countries Found...</h2>
      ) : (
        <CardList>
          {finalResult.map((country) => (
            <Card key={country.name}>
              <Card.Image
                src={country.flag}
                alt={`${country.name} country flag`}
              />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Description>
                  <strong>Population:</strong>{' '}
                  {formatNumber(country.population)}
                </Card.Description>
                <Card.Description>
                  <strong>Region:</strong> {country.region}
                </Card.Description>
                <Card.Description>
                  <strong>Capital:</strong> {country.capital}
                </Card.Description>
              </Card.Body>
            </Card>
          ))}
        </CardList>
      )}

      {page < totalPages && (
        <LoadPage>
          <LoadPage.Button onClick={loadMore}>Load More</LoadPage.Button>
        </LoadPage>
      )}
    </>
  );
}
