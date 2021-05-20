import { Container, Image, Title, Description, Body } from './styles';

export default function Card({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Card.Image = function CardImage({ children, ...props }) {
  return <Image {...props}>{children}</Image>;
};

Card.Title = function CardTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Card.Description = function CardDescription({ children, ...props }) {
  return <Description {...props}>{children}</Description>;
};

Card.Body = function CardBody({ children, ...props }) {
  return <Body {...props}>{children}</Body>;
};
