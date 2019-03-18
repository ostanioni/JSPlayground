// import React from 'react'
import styled from 'styled-components'

let IconSvg = styled.img.attrs(props=>({
  src: props.src,
  alt: props.alt,
  onClick: props.onClick,
}))`
width: ${props=>props.width};
margin: 0.7rem;
cursor: pointer;
&>svg>path {
  fill: ${props=>props.theme.textColor};
  transition: fill 0.5s easy-in-out;
}
`
export default IconSvg