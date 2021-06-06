import {
  Container,
  Card,
  Detail,
  Image,
  Body,
  List,
  Lists,
  Title,
} from './styles';

export default function Loader({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Loader.Card = function LoaderCard({ children, ...props }) {
  return (
    <Card width={285} height={345} viewBox='0 0 285 345' {...props}>
      <rect x='0' y='0' rx='0' ry='0' width='285' height='166' />
      <rect x='20' y='190' rx='10' ry='10' width='220' height='14' />
      <rect x='20' y='230' rx='10' ry='10' width='170' height='10' />
      <rect x='20' y='250' rx='10' ry='10' width='150' height='10' />
      <rect x='20' y='270' rx='10' ry='10' width='160' height='10' />
    </Card>
  );
};

Loader.Detail = function LoaderDetail({ children, ...props }) {
  return <Detail {...props}>{children}</Detail>;
};

Loader.Body = function LoaderBody({ children, ...props }) {
  return <Body {...props}>{children}</Body>;
};

Loader.Lists = function LoaderLists({ children, ...props }) {
  return <Lists {...props}>{children}</Lists>;
};

Loader.Image = function LoaderImage({ children, ...props }) {
  return (
    <Image {...props}>
      <rect x='0' y='0' rx='0' ry='0' width='650' height='350' />
    </Image>
  );
};

Loader.Title = function LoaderTitle({ children, ...props }) {
  return (
    <Title width={300} height={20} viewBox='0 0 300 20' {...props}>
      <rect x='0' y='0' rx='5' ry='5' width='300' height='20' />
    </Title>
  );
};

Loader.List = function LoaderList({ children, ...props }) {
  return (
    <List width={200} height={70} viewBox='0 0 200 70' {...props}>
      <rect x='0' y='0' rx='5' ry='5' width='200' height='10' />
      <rect x='0' y='20' rx='5' ry='5' width='200' height='10' />
      <rect x='0' y='40' rx='5' ry='5' width='200' height='10' />
      <rect x='0' y='60' rx='5' ry='5' width='200' height='10' />
    </List>
  );
};
