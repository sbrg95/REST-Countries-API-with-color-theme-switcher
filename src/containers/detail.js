import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Detail } from '../components';
import { fetchCountry, formatNumber } from '../utils/functions';

export default function DetailContainer() {
  const [countryRes, setCountryRes] = useState({ status: 'idle' });
  const countryCode = useParams().country;

  useEffect(() => {
    setCountryRes({ status: 'pending' });
    fetchCountry(countryCode)
      .then((data) => {
        setCountryRes({ status: 'resolved', data });
      })
      .catch((error) => {
        setCountryRes({ status: 'rejected', error });
      });
  }, [countryCode]);

  if (countryRes.status === 'pending' || countryRes.status === 'idle') {
    return <div>Loading...</div>;
  }

  const country = countryRes.data;

  return (
    <Detail>
      <Detail.BackButton to='/' />
      <Detail.Body>
        <Detail.Image>
          <img src={country.flag} alt={`${country.name} flag`} />
        </Detail.Image>
        <Detail.Description>
          <Detail.Title>{country.name}</Detail.Title>
          <Detail.Lists>
            <Detail.List>
              <Detail.Item>
                <Detail.ItemTitle>Native Name: </Detail.ItemTitle>
                {country.nativeName}
              </Detail.Item>
              <Detail.Item>
                <Detail.ItemTitle>Population: </Detail.ItemTitle>
                {formatNumber(country.population)}
              </Detail.Item>
              <Detail.Item>
                <Detail.ItemTitle>Region: </Detail.ItemTitle>
                {country.region}
              </Detail.Item>
              <Detail.Item>
                <Detail.ItemTitle>Sub Region: </Detail.ItemTitle>
                {country.subregion}
              </Detail.Item>
              <Detail.Item>
                <Detail.ItemTitle>Capital: </Detail.ItemTitle>
                {country.capital}
              </Detail.Item>
            </Detail.List>
            <Detail.List>
              <Detail.Item>
                <Detail.ItemTitle>Top Level Domain: </Detail.ItemTitle>
                {country.topLevelDomain}
              </Detail.Item>
              <Detail.Item>
                <Detail.ItemTitle>Currencies: </Detail.ItemTitle>
                {country.currencies.map((c) => c.name).join(', ')}
              </Detail.Item>
              <Detail.Item>
                <Detail.ItemTitle>Languages: </Detail.ItemTitle>
                {country.languages.map((l) => l.name).join(', ')}
              </Detail.Item>
            </Detail.List>
          </Detail.Lists>
        </Detail.Description>
      </Detail.Body>
    </Detail>
  );
}
