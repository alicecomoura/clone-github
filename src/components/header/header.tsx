import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import { Container, GithubLogo, SearchForm } from './styles';

export const Header = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    navigate('/' + search.toLowerCase().trim())
    setSearch('')
  }

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input placeholder="Search or jump to.."
        value={search}
        onChange={event => setSearch(event.currentTarget.value)}  
      />
      </SearchForm>
    </Container>
  );
}

export default Header;