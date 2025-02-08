import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Wrapper } from "../../../Wrapper";
import { Section } from "../../../common/Section";
import { Content } from "../../Movies/MovieList/styled";
import { PersonDetailsTile } from "../../../common/tiles/PersonDetailsTile";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { selectMovies } from "../../Movies/movieSlice";
import { fetchPeopleDetails, selectPeopleDetails } from "../peopleSlice";
import { Article } from "../../../common/Article";
import { useIsMobile } from "../../../useIsMobile";

function PeoplePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;
  const peopleDetails = useSelector(selectPeopleDetails);

  useEffect(() => {
    dispatch(fetchPeopleDetails(id));
  }, [dispatch, id]);

  const isMobile = useIsMobile();

  const castCharacter = "Mulan";
  const crewJob = "Director";

  return (
    <Wrapper>
      <Section
        sectionHeader=""
        body={
          <>
            {peopleDetails && (
              <PersonDetailsTile
                personDetailsSize
                profilePath={peopleDetails.profile_path}
                name={peopleDetails.name}
                birthday={peopleDetails.birthday}
                placeOfBirth={peopleDetails.place_of_birth}
                biography={peopleDetails.biography}
              />
            )}
            <Article
              articleHeader="Movies - cast"
              body={
                <Content>
                  {movieCount > 0 ? (
                    movies.results.map(
                      ({
                        id,
                        poster_path,
                        title,
                        release_date,
                        genre_ids,
                        vote_average,
                        vote_count,
                      }) => (
                        <MovieTile
                          key={id}
                          id={id}
                          posterPath={poster_path}
                          title={title}
                          castCharacter={isMobile ? undefined : castCharacter}
                          releaseDate={
                            isMobile ? release_date.slice(0, 4) : release_date
                          }
                          genreIds={genre_ids}
                          voteAverage={vote_average}
                          voteCount={vote_count}
                        />
                      )
                    )
                  ) : (
                    <p>No movies available</p>
                  )}
                </Content>
              }
            />
            <Article
              articleHeader="Movies - crew"
              body={
                <Content>
                  {movieCount > 0 ? (
                    movies.results.map(
                      ({
                        id,
                        poster_path,
                        title,
                        release_date,
                        genre_ids,
                        vote_average,
                        vote_count,
                      }) => (
                        <MovieTile
                          key={id}
                          id={id}
                          posterPath={poster_path}
                          title={title}
                          crewJob={isMobile ? undefined : crewJob}
                          releaseDate={
                            isMobile ? release_date.slice(0, 4) : release_date
                          }
                          genreIds={genre_ids}
                          voteAverage={vote_average}
                          voteCount={vote_count}
                        />
                      )
                    )
                  ) : (
                    <p>No movies available</p>
                  )}
                </Content>
              }
            />
          </>
        }
      />
    </Wrapper>
  );
}

export default PeoplePage;
