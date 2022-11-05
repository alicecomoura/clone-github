import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import { ProfileData } from "../../components/profile-data/profile-data";
import { RepoCard } from "../../components/repo-card/repo-card";
import { RandomCalendar } from "../../components/random-calendar/random-calendar";

import { APIUser, APIRepo } from "../../@types";

import * as S from "./styles";
interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

export const Profile = () => {
  const { username = "alicecomoura" } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: "User not found!" });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepo = repos.sort(() => 0.50 - Math.random())
      const slicedRepos = shuffledRepo.slice(0, 6) // 6 repo

      setData({
        user,
        repos: slicedRepos
      })
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  const TabContent = () => (
    <div className="content">
      <S.RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  );

  return (
    <S.Container>
      <S.Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </S.Tab>
      <S.Main>
        <S.LeftContent>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            following={data.user.following}
            followers={data.user.followers}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </S.LeftContent>
        <S.RightContent>
          <S.Tab className="mobile">
            <TabContent />
            <span className="line" />
          </S.Tab>

          <S.RepoList>
            <h2>Random repos</h2>
            <div>
              {data.repos.map((repo) => (
                <RepoCard
                  key={repo.name}
                  username={repo.owner.login}
                  reponame={repo.name}
                  description={repo.description}
                  language={repo.languge}
                  stars={repo.stargazers_count}
                  forks={repo.forks}
                />
              ))}
            </div>
          </S.RepoList>

          <S.CalendarHeading>
            Random calendar (do not represent actual data)
          </S.CalendarHeading>

          <RandomCalendar />
        </S.RightContent>
      </S.Main>
    </S.Container>
  );
};
