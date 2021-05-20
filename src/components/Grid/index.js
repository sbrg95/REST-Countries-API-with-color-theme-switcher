import { Container, Inner, Item } from './styles';

export default function Grid({ children, ...props }) {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Grid.Item = function GridItem({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
};
