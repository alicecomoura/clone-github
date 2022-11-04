import { Container, GithubLogo, SearchForm } from './styles';

export const Header = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Search or jump to.." />
      </SearchForm>
    </Container>
  );
}

export default Header;