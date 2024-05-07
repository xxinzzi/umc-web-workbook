import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Loader from "../components/Loader";
import styled from "styled-components";
import StarRating from "../components/StarRating";

const Wrapper = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 500px;
  border-radius: 7px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 50px;
`;

const Title = styled.h2`
  margin: 10px 0px;
  font-size: 20px;
  color: white;
`;

const VoteAverage = styled.span`
  margin: 10px 0px;
  font-size: 15px;
  color: white;
`;

const ReleaseDate = styled.span`
  margin: 10px 0px;
  font-size: 15px;
  color: white;
`;

const OverviewWrapper = styled.div`
  margin: 10px 0px;
  font-size: 15px;
  color: white;
`;

const Overview = styled.span`
  width: 600px;
  margin: 10px 0px;
  font-size: 15px;
  color: white;
`;

const MovieDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJlMTc4NmMzOTRiNTNiNDE0YjI4OWY0ZWU5YTk4NyIsInN1YiI6IjY2MzM0N2U5ODEzY2I2MDEyMTg2ZTlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A159m_rOX_HnuFPW_aHnMOTiMYyXhQbT3yMamEeazCg'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        movie && (
          <>
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <MovieInfo>
              <Title>{movie.title}</Title>
              <VoteAverage>평점 <StarRating value={Math.round(movie.vote_average)}/></VoteAverage>
              <ReleaseDate>개봉일 {movie.release_date}</ReleaseDate>
              <OverviewWrapper>줄거리</OverviewWrapper>
              <Overview>{movie.overview ? movie.overview : 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'}</Overview>
            </MovieInfo>
          </>
        )
      )}
    </Wrapper>
  );
};

export default MovieDetailPage;
