/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import Marker from 'react-leaflet-enhanced-marker';
import homesData from '../../data/homesData';
import markerIcon from '../../images/marker-icon.png';
import { shadowed } from '../styledBases';
import useWindowDimensions from '../../config/useWindowDimensions';

const Grid = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    overflow-y: hidden;
    &:nth-child(1) {
      flex-basis: 55%;
    }
    &:nth-child(2) {
      flex-basis: 45%;
    }
  }
`;

const HomesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 60%;
    height: calc(100vh - 6rem);
    overflow-y: auto;
  }
`;

const HomeItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 3rem;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid lightgray;
  background: #fff;
  cursor: pointer;
  ${shadowed}

  &:last-child {
    margin-bottom: 10rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const HomePreview = styled.img`
  object-fit: cover;
  border-radius: 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 35%;
  }
`;

const HomeInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MarkerIcon = styled.img`
  object-fit: cover;
`;

const HomeTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  align-self: center;
`;
const HomeDescription = styled.p`
  padding: 2rem 1rem;
  font-size: clamp(1.3rem 2vw 1.8);
  text-align: left;
  line-height: 1.5;
`;
const HomePrice = styled.span`
  align-self: flex-end;
  font-weight: bold;
`;
const Leaflet = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HomesGrid = () => {
  const [position, setposition] = useState(homesData.home1.coordinates);
  const { width } = useWindowDimensions();

  return (
    <>
      <Grid>
        <HomesContainer>
          {homesData.array().map(home => (
            <HomeItem
              key={home.id}
              onMouseEnter={() => {
                setposition(home.coordinates);
              }}
            >
              <HomePreview src={home.hero} />
              <HomeInfo>
                <HomeTitle>{home.title}</HomeTitle>
                <HomeDescription>{home.intro}</HomeDescription>
                <HomePrice>{home.price}</HomePrice>
              </HomeInfo>
            </HomeItem>
          ))}
        </HomesContainer>
        {width >= 768 ? (
          <Leaflet>
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              key={position[0]}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={position}
                icon={<MarkerIcon src={markerIcon} alt="Marker" />}
              >
                <Popup>Aproximate location</Popup>
              </Marker>
            </MapContainer>
          </Leaflet>
        ) : null}
      </Grid>
    </>
  );
};

export default HomesGrid;
