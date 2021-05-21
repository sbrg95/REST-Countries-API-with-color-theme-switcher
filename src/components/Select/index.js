import { useState } from 'react';
import {
  Container,
  Control,
  Label,
  Indicator,
  Options,
  Option,
} from './styles';

export default function Select({
  label = 'Select',
  options = [],
  value,
  setValue,
  children,
  ...props
}) {
  const [showOptions, setShowOptions] = useState(false);
  function toggleShow() {
    setShowOptions(!showOptions);
  }

  return (
    <Container role='listbox' value={value} onClick={toggleShow} {...props}>
      <Control>
        <Label role='label'>{!value || value === 'all' ? label : value}</Label>
        <Indicator>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <title>Chevron Down</title>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='48'
              d='M112 184l144 144 144-144'
            />
          </svg>
        </Indicator>
      </Control>
      {showOptions && (
        <Options>
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => setValue(option.value)}
              role='option'
              value={option.value}
            >
              {option.label}
            </Option>
          ))}
        </Options>
      )}
    </Container>
  );
}
