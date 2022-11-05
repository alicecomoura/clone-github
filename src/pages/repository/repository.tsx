import { Link } from 'react-router-dom'

import * as S from "./styles";

export const Repository = () => {
  return (
    <S.Container>
      <S.Breadcrumb>
        <S.RepoIcon />

        <Link className={"username"} to={"/alicecomoura"}>
          alicecomoura
        </Link>
        <span>/</span>

        <Link className={"reponame"} to={"/alicecomoura/simple-kanban-board"}>
          simple-kanban-board
        </Link>
      </S.Breadcrumb>

      <p>Um board simples de kanban: estudos da API HTML Drag and Drop</p>

      <S.Stars>
        <li>
          <S.StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <S.ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </S.Stars>

      <S.LinkButton href={'https://github.com/alicecomoura'}>
        <S.GithunIcon />
        <span>View on Github</span>
      </S.LinkButton>

    </S.Container>
  );
};
