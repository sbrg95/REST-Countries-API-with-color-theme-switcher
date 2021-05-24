import { useState } from 'react';
import { Card, CardList, Filters, LoadPage, Loader } from '../components';
import { formatNumber, paginateArray } from '../utils/functions';

export default function Countries({ countries }) {
  const { data, status, error } = countries;
  const [region, setRegion] = useState('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 8;

  if (status === 'pending' || status === 'idle') {
    return (
      <>
        <Filters>
          <Filters.Search type='text' placeholder='Search for a country...' />
          <Filters.Select label='Filter by Region' />
        </Filters>
        <CardList>
          <LoaderCard />
        </CardList>
      </>
    );
  }

  if (status === 'error') {
    throw error;
  }

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

  function handleRegion(region) {
    setPage(1);
    setRegion(region);
  }

  function handleSearch(event) {
    setPage(1);
    setSearch(event.target.value);
  }

  function loadMore() {
    setPage(page + 1);
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight - 150,
        behavior: 'smooth',
      });
    }, 200);
  }

  const options = [
    { value: 'all', label: 'All Regions' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

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
            <CardItem key={country.name} country={country} />
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

function LoaderCard() {
  return Array.from(Array(8).keys()).map((i) => <Loader.Card key={i} />);
}

function CardItem({ country }) {
  const { name, flag, population, region, capital } = country;
  return (
    <Card>
      <Card.Image src={flag} alt={`${name} country flag`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Description>
          <strong>Population:</strong> {formatNumber(population)}
        </Card.Description>
        <Card.Description>
          <strong>Region:</strong> {region}
        </Card.Description>
        <Card.Description>
          <strong>Capital:</strong> {capital}
        </Card.Description>
      </Card.Body>
    </Card>
  );
}
