import { Container, Label, Input, Image } from './styles';
import { useState } from 'react';

export default function Search(props) {
  const [value, setValue] = useState('');
  return (
    <Container>
      <Label>
        <Image>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <title>Search</title>
            <path
              d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z'
              fill='none'
              stroke='currentColor'
              strokeMiterlimit='10'
              strokeWidth='32'
            />
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeMiterlimit='10'
              strokeWidth='32'
              d='M338.29 338.29L448 448'
            />
          </svg>
        </Image>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      </Label>
    </Container>
  );
}
