import { Container, Card } from './styles';

export default function Loader({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Loader.Card = function LoaderCard({ children, ...props }) {
  return (
    <Card
      width={285}
      height={345}
      viewBox='0 0 285 345'
      // foregroundColor='red'
      // foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='0' y='0' rx='0' ry='0' width='285' height='166' />
      <rect x='20' y='190' rx='10' ry='10' width='220' height='14' />
      <rect x='20' y='230' rx='10' ry='10' width='170' height='10' />
      <rect x='20' y='250' rx='10' ry='10' width='150' height='10' />
      <rect x='20' y='270' rx='10' ry='10' width='160' height='10' />
    </Card>
  );
};
