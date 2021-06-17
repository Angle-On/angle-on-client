import styled from 'styled-components';

export const BioDivs = styled.div`
height: 30vh;
width: 80vh;
color: white;
padding: 10px;
margin: auto;
margin-top: 20px;
border-radius: .5em;
background-color: #151823;
  animation: textColor 10s ease infinite;
  @include backlight(0, 5vw, 5vw, 0.75, #0fffc1, #7e0fff, 10s);
    
  @keyframes textColor {
    0% {
      color: #7e0fff;
    }
    50% {
      color: #0fffc1;
    }
    100% {
      color: #7e0fff;
    }
  }
  font-family: monospace;
  justify-content: center;
  background-color:darken(#252B37, 4%);
  @mixin backlight($x, $y, $spread, $size, $colorA, $colorB, $duration) {
    &:after {
      position: absolute;
      content: "";
      top: $y;
      left: $x;
      right: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      margin: 0 auto;
      transform: scale($size);
      -webkit-filter: blur($spread);
      -moz-filter: blur($spread);
      -ms-filter: blur($spread);
      filter: blur($spread);
      background: linear-gradient(270deg, $colorA, $colorB);
      background-size: 200% 200%;
      animation: animateGlow $duration ease infinite;
      
      @keyframes animateGlow {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
      }
    }
  }
`;
