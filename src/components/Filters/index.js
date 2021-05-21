import { Container } from './styles';
import Select from '../Select';
import Search from '../Search';

export default function Filters({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Filters.Search = function FiltersSearch({ children, ...props }) {
  return <Search {...props}>{children}</Search>;
};

Filters.Select = function FiltersSelect({ children, ...props }) {
  return <Select {...props}>{children}</Select>;
};
