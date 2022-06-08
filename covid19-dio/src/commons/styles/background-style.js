import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
          @keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    z-index: -10;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #1e0d36;
    overflow: hidden;
}

.background span {
    width: 8vmin;
    height: 8vmin;
    border-radius: 8vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 25;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #E45A84;
    top: 49%;
    left: 18%;
    animation-duration: 148s;
    animation-delay: -134s;
    transform-origin: 8vw -4vh;
    box-shadow: -16vmin 0 2.5570386947211734vmin currentColor;
}
.background span:nth-child(1) {
    color: #FFACAC;
    top: 95%;
    left: 12%;
    animation-duration: 146s;
    animation-delay: -15s;
    transform-origin: 0vw 21vh;
    box-shadow: -16vmin 0 2.7571556961481356vmin currentColor;
}
.background span:nth-child(2) {
    color: #583C87;
    top: 87%;
    left: 67%;
    animation-duration: 65s;
    animation-delay: -202s;
    transform-origin: 1vw 16vh;
    box-shadow: -16vmin 0 2.1553272506901324vmin currentColor;
}
.background span:nth-child(3) {
    color: #583C87;
    top: 26%;
    left: 30%;
    animation-duration: 176s;
    animation-delay: -155s;
    transform-origin: -24vw -7vh;
    box-shadow: 16vmin 0 2.787873335568409vmin currentColor;
}
.background span:nth-child(4) {
    color: #583C87;
    top: 95%;
    left: 41%;
    animation-duration: 211s;
    animation-delay: -216s;
    transform-origin: 4vw 13vh;
    box-shadow: 16vmin 0 2.2616107967890438vmin currentColor;
}
.background span:nth-child(5) {
    color: #583C87;
    top: 39%;
    left: 60%;
    animation-duration: 149s;
    animation-delay: -93s;
    transform-origin: 18vw 3vh;
    box-shadow: -16vmin 0 2.8896848798827586vmin currentColor;
}
.background span:nth-child(6) {
    color: #E45A84;
    top: 96%;
    left: 18%;
    animation-duration: 178s;
    animation-delay: -139s;
    transform-origin: 6vw 8vh;
    box-shadow: 16vmin 0 2.140172969718164vmin currentColor;
}
.background span:nth-child(7) {
    color: #583C87;
    top: 86%;
    left: 84%;
    animation-duration: 168s;
    animation-delay: -212s;
    transform-origin: -22vw 2vh;
    box-shadow: 16vmin 0 2.7382239359684486vmin currentColor;
}
.background span:nth-child(8) {
    color: #E45A84;
    top: 16%;
    left: 33%;
    animation-duration: 18s;
    animation-delay: -112s;
    transform-origin: 9vw 22vh;
    box-shadow: -16vmin 0 2.6306909200203448vmin currentColor;
}
.background span:nth-child(9) {
    color: #583C87;
    top: 56%;
    left: 37%;
    animation-duration: 167s;
    animation-delay: -8s;
    transform-origin: 8vw -21vh;
    box-shadow: -16vmin 0 2.6191858241445534vmin currentColor;
}
.background span:nth-child(10) {
    color: #E45A84;
    top: 30%;
    left: 84%;
    animation-duration: 224s;
    animation-delay: -29s;
    transform-origin: -22vw -3vh;
    box-shadow: -16vmin 0 2.1434483854541844vmin currentColor;
}
.background span:nth-child(11) {
    color: #E45A84;
    top: 83%;
    left: 56%;
    animation-duration: 60s;
    animation-delay: -153s;
    transform-origin: -1vw -3vh;
    box-shadow: 16vmin 0 2.328515559731235vmin currentColor;
}
.background span:nth-child(12) {
    color: #583C87;
    top: 80%;
    left: 55%;
    animation-duration: 232s;
    animation-delay: -160s;
    transform-origin: 25vw -10vh;
    box-shadow: -16vmin 0 2.845470838037815vmin currentColor;
}
.background span:nth-child(13) {
    color: #FFACAC;
    top: 62%;
    left: 77%;
    animation-duration: 121s;
    animation-delay: -157s;
    transform-origin: 22vw -18vh;
    box-shadow: 16vmin 0 2.8972112140140873vmin currentColor;
}
.background span:nth-child(14) {
    color: #583C87;
    top: 37%;
    left: 42%;
    animation-duration: 154s;
    animation-delay: -137s;
    transform-origin: 9vw -14vh;
    box-shadow: -16vmin 0 2.6655999662221874vmin currentColor;
}
.background span:nth-child(15) {
    color: #FFACAC;
    top: 2%;
    left: 85%;
    animation-duration: 191s;
    animation-delay: -14s;
    transform-origin: -17vw 22vh;
    box-shadow: -16vmin 0 2.96531894122033vmin currentColor;
}
.background span:nth-child(16) {
    color: #583C87;
    top: 55%;
    left: 88%;
    animation-duration: 121s;
    animation-delay: -74s;
    transform-origin: -21vw -5vh;
    box-shadow: 16vmin 0 2.8596118305818656vmin currentColor;
}
.background span:nth-child(17) {
    color: #FFACAC;
    top: 82%;
    left: 66%;
    animation-duration: 74s;
    animation-delay: -124s;
    transform-origin: 19vw 4vh;
    box-shadow: 16vmin 0 2.698226780903881vmin currentColor;
}
.background span:nth-child(18) {
    color: #583C87;
    top: 32%;
    left: 9%;
    animation-duration: 113s;
    animation-delay: -181s;
    transform-origin: -6vw -10vh;
    box-shadow: 16vmin 0 2.4142730955759624vmin currentColor;
}
.background span:nth-child(19) {
    color: #E45A84;
    top: 37%;
    left: 94%;
    animation-duration: 95s;
    animation-delay: -58s;
    transform-origin: 22vw 2vh;
    box-shadow: -16vmin 0 2.4220197246786155vmin currentColor;
}
.background span:nth-child(20) {
    color: #FFACAC;
    top: 90%;
    left: 45%;
    animation-duration: 168s;
    animation-delay: -205s;
    transform-origin: -21vw 4vh;
    box-shadow: 16vmin 0 2.9057676070356067vmin currentColor;
}
.background span:nth-child(21) {
    color: #E45A84;
    top: 90%;
    left: 12%;
    animation-duration: 184s;
    animation-delay: -231s;
    transform-origin: 7vw -8vh;
    box-shadow: -16vmin 0 2.5420685406037915vmin currentColor;
}
.background span:nth-child(22) {
    color: #583C87;
    top: 14%;
    left: 57%;
    animation-duration: 131s;
    animation-delay: -102s;
    transform-origin: 3vw 12vh;
    box-shadow: 16vmin 0 2.994687770461513vmin currentColor;
}
.background span:nth-child(23) {
    color: #E45A84;
    top: 31%;
    left: 33%;
    animation-duration: 232s;
    animation-delay: -126s;
    transform-origin: -15vw 13vh;
    box-shadow: -16vmin 0 2.176610441114109vmin currentColor;
}
.background span:nth-child(24) {
    color: #583C87;
    top: 51%;
    left: 7%;
    animation-duration: 173s;
    animation-delay: -79s;
    transform-origin: 8vw -21vh;
    box-shadow: -16vmin 0 2.4822307602552716vmin currentColor;
}
.background span:nth-child(25) {
    color: #FFACAC;
    top: 41%;
    left: 68%;
    animation-duration: 143s;
    animation-delay: -22s;
    transform-origin: -4vw -20vh;
    box-shadow: 16vmin 0 2.8899721464853068vmin currentColor;
}
.background span:nth-child(26) {
    color: #583C87;
    top: 42%;
    left: 82%;
    animation-duration: 54s;
    animation-delay: -93s;
    transform-origin: 8vw 8vh;
    box-shadow: -16vmin 0 2.8441568430568704vmin currentColor;
}
.background span:nth-child(27) {
    color: #E45A84;
    top: 70%;
    left: 94%;
    animation-duration: 179s;
    animation-delay: -137s;
    transform-origin: 7vw 23vh;
    box-shadow: 16vmin 0 2.411663202652764vmin currentColor;
}

`

export default globalStyle
