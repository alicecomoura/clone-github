import { ProfileDataProps } from "./profile-data.interface";

import * as S from "./styles";

export const ProfileData = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}: ProfileDataProps) => {
  return (
    <S.Container>
      <S.Flex>
        <S.Avatar src={avatarUrl} alt={name} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
          {/* <button>Edit profile</button> */}
        </div>
      </S.Flex>

      <S.Row>
        <li>
          <S.PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>

        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </S.Row>

      <S.Column>
        {company && (
          <li>
            <S.CompanyIcon /> <span>{company}</span>
          </li>
        )}
        {email && (
          <li>
            <S.EmailIcon /> <span>{email}</span>
          </li>
        )}
        {location && (
          <li>
            <S.LocationIcon /> <span>{location}</span>
          </li>
        )}
        {blog && (
          <li>
            <S.BlogIcon /> <span>{blog}</span>
          </li>
        )}
      </S.Column>
    </S.Container>
  );
};
