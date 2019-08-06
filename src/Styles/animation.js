import styled, { css, keyframes } from 'styled-components'


const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
        margin-top: 10px;
    }
    to{
        filter: blur(0);
        opacity: 1; 
        margin-top: 0px;
    }
`
export const fadeIn = ({time = '1s', type = 'ease'} = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`
