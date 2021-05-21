import { Container, Button } from './styles';

export default function LoadPage({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

LoadPage.Button = function LoadPageButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};
