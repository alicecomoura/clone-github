import { ProfileData } from '../../components/profile-data/profile-data'
import { RepoCard } from '../../components/repo-card/repo-card'

import * as S from './styles';

export const Profile = () => {
  return (
    <S.Container>
      <S.Main>
        <S.LeftContent>
          <ProfileData 
            username={'alicecomoura'} 
            name={'Alice Coelho'} 
            avatarUrl={'https://avatars.githubusercontent.com/u/78990348?v=4'} 
            following={47}
            followers={53}
            company={'Vai na Web'}
            location={'Rio de Janeiro, Brazil'}
            email={'alice@gmail.com'}
            blog={'https://www.linkedin.com/in/alicecomoura/'}
          />
        </S.LeftContent>
        <S.RightContent>
          <S.RepoList>
            <h2>Random repos</h2>
            <div>
              {[1,2,3,4,5,6].map(card => (
                <RepoCard 
                  key={card}
                  username={'alicecomoura'}
                  reponame={'simple-kanban-board'}
                  description={'bla blablabal balabalaa'}
                  language={card % 3 ? 'Javascript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </S.RepoList>
        </S.RightContent>
      </S.Main>
    </S.Container>
  )
}