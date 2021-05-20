import { Container } from './styles';

export default function Detail({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
