import styled from "styled-components";

const MapBox = styled.div`
  height: 350px;
  border-radius:12px;
  overflow: hidden;
  border:1px solid rgba(255,255,255,0.03);
  background: linear-gradient(135deg, rgba(122,0,255,0.03), rgba(0,212,255,0.03));
  display:flex;
  align-items:center;
  justify-content:center;
  color:#cfe7ff;
`;

export default function MapView({text="Mapa (placeholder)"}) {
  return <MapBox>{text}</MapBox>;
}
