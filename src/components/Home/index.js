import { Container, Inner } from './styles';

export default function Home({ children, ...props }) {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
}
