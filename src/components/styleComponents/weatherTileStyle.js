import styled from 'styled-components';
import img from '../../assets/images/bg_triangles_light_wide.png';

export const LocationHead = styled.h1`
  float:${props => props.float || 'right'}
  padding: ${props => props.padding || '0'}
  margin-right: ${props => props.marginRight || '0'}
  font-weight: ${props => props.fontWeight || '200'}
  font-size: ${props => props.fontSize || '40px'};
`;

export const WeatherPara = styled.p`
  color: ${props => props.color || '#4D4D4D'};
  font-size: ${props => props.fontSize || '42px'};
  font-family: ${props => props.fontFamily || 'arial'};
`;

export const WeatherDiv = styled.div`
  height: ${props => props.height || '450px'};
  width: ${props => props.width || '350px'}
  background-color: ${props => props.backgroundColor || 'rgba(0,0,0,0.1)'};
  float: ${props => props.float || 'left'};
  margin-left: ${props => props.marginLeft || '10px'};
  radius:${props => props.radius || '15px'};
  text-align: ${props => props.textAlign || 'center'}
`;

export const Div = styled.div`
  height:${props => props.height || '100%'};
  width:${props => props.width || '100%'};
  margin: ${props => props.margin || '0 auto'};
  margin-left: ${props => props.marginLeft || '0'}
  margin-top: ${props => props.marginTop || '0'}
  margin-right: ${props => props.marginRight || '0'}
  float:${props => props.float || 'none'}
  text-align:${props => props.textAlign || 'none'}
`;

export const Span = styled.span`
  float: ${props => props.float || 'none'};
  font-size: ${props => props.fontSize || '42px'};
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: ${props => props.position || 'fixed'};
  z-index: 999999;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0);
  background: url(${img}) no-repeat center;
  background-size: cover;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  width: 100%;
  align-items: center;
`;

export const Screen = styled.section`
  font-family: ${props => props.fontFamily || 'arial'};
  height: 100vh;
  background-color: rgba(255, 255, 255, 0);
  background: url(${img}) no-repeat center;
  background-size: cover;
`;
