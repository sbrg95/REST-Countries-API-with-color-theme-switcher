import { Container } from './styles';

export default function CardList({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
