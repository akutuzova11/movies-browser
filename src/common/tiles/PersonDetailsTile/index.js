import { InfoAboutBirth } from "./InfoAboutBirth/index.js";
import { PersonDescriptionWrapper } from "../MovieDetailsTile/Description/styled.js";
import {
  Poster,
  PosterWrapper,
  TileContent,
  TileTitle,
  Wrapper,
} from "../../StylesDetailsTile/styled.js";
import { MissingPersonPoster } from "../Persons/MissingPersonPoster/index.js";

export const PersonDetailsTile = ({
  personDetailsSize,
  profilePath,
  name,
  birthday,
  placeOfBirth,
  biography,
}) => {
  const formatDate = (date) => {
    if (date) {
      const [year, month, day] = date.split("-");
      return `${day}.${month}.${year}`;
    }
    return "Unknown";
  };
  return (
    <Wrapper personDetailsSize={personDetailsSize}>
      <PosterWrapper personDetailsSize={personDetailsSize}>
        {profilePath ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500${profilePath}`}
            alt={`poster of ${name}`}
          />
        ) : (
          <MissingPersonPoster />
        )}
      </PosterWrapper>
      <TileContent>
        {name ? (
          <TileTitle personDetailsSize={personDetailsSize}>{name}</TileTitle>
        ) : (
          <TileTitle>Title not available</TileTitle>
        )}
        <InfoAboutBirth
          personDetailsSize
          info={{
            dateOfBirth: formatDate(birthday),
            placeOfBirth: placeOfBirth,
          }}
        />
      </TileContent>
      {biography && (
        <PersonDescriptionWrapper>{biography}</PersonDescriptionWrapper>
      )}
    </Wrapper>
  );
};
