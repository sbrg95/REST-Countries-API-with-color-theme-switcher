import { Home } from '../components';
import { Countries } from '../containers';

export default function HomePage({ countries }) {
  return (
    <Home>
      <Countries countries={countries} />
    </Home>
  );
}
