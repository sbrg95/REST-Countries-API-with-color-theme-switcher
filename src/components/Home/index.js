import { Container } from './styles';

export default function Home({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
