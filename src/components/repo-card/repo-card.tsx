import { Link } from "react-router-dom";
import { RepoCardProps } from "./repo-card.interface";

import * as S from "./styles";

export const RepoCard = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}: RepoCardProps) => {
  const languageClass = language ? language.toLocaleLowerCase() : "other";

  return (
    <S.Container>
      <S.TopContent>
        <header>
          <S.RepoIcon />

          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </S.TopContent>
      <S.BottomContent>
        <ul>
          <li>
            <div className={`language ${languageClass}`}/>
            <span>{language}</span>
          </li>
          <li>
            <S.StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <S.ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </S.BottomContent>
    </S.Container>
  );
};
