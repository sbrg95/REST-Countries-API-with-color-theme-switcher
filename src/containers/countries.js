import { Card, Grid } from '../components';
import { formatNumber } from '../utils/functions';

export default function countries({ countries }) {
  const { data, status, error } = countries;

  if (status === 'pending' || status === 'idle') {
    return <div>Loading</div>;
  }

  if (status === 'error') {
    throw error;
  }

  return (
    <Grid>
      {data.map((country) => (
        <Card key={country.name}>
          <Card.Image src={country.flag} alt={`${country.name} country flag`} />
          <Card.Body>
            <Card.Title>{country.name}</Card.Title>
            <Card.Description>
              <strong>Population:</strong> {formatNumber(country.population)}
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
    </Grid>
  );
}
