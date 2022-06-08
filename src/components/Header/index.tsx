import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img alt="logo" />

      <ul>
        <li>Solutions</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button type="button">Login</button>
      <button type="button">Sign up</button>
    </Container>
  );
}
