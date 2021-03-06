import {
  Container,
  Inner,
  Body,
  Image,
  Description,
  Title,
  Lists,
  List,
  Item,
  ItemTitle,
  Button,
  Border,
  BorderTitle,
  BorderList,
  BorderItem,
} from './styles';

export default function Detail({ children, ...props }) {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Detail.BackButton = function DetailBackButton(props) {
  return (
    <Button {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <title>Arrow Back</title>
        <path
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='48'
          d='M244 400L100 256l144-144M120 256h292'
        />
      </svg>{' '}
      Back
    </Button>
  );
};

Detail.Body = function DetailBody({ children, ...props }) {
  return <Body {...props}>{children}</Body>;
};

Detail.Image = function DetailImage({ children, ...props }) {
  return <Image {...props}>{children}</Image>;
};

Detail.Description = function DetailDescription({ children, ...props }) {
  return <Description {...props}>{children}</Description>;
};

Detail.Title = function DetailTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Detail.Lists = function DetailLists({ children, ...props }) {
  return <Lists {...props}>{children}</Lists>;
};

Detail.List = function DetailList({ children, ...props }) {
  return <List {...props}>{children}</List>;
};

Detail.Item = function DetailItem({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
};

Detail.ItemTitle = function DetailItemTitle({ children, ...props }) {
  return <ItemTitle {...props}>{children}</ItemTitle>;
};

Detail.Button = function DetailButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};

Detail.Border = function DetailBorder({ children, ...props }) {
  return <Border {...props}>{children}</Border>;
};
Detail.BorderTitle = function DetailBorderTitle({ children, ...props }) {
  return <BorderTitle {...props}>{children}</BorderTitle>;
};
Detail.BorderList = function DetailBorderList({ children, ...props }) {
  return <BorderList {...props}>{children}</BorderList>;
};
Detail.BorderItem = function DetailBorderItem({ children, ...props }) {
  return <BorderItem {...props}>{children}</BorderItem>;
};
