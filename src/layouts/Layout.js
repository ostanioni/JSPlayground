import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styled/GlobalStyle'

import Nav from 'components/Nav'
import Drawer from 'components/Drawer'
import MainContent from 'components/MainContent'
import BackToTop from 'components/BackToTop'

import 'css/App.scss'

import 'css/normalize.css'

const GridStyled = styled.div.attrs(props=>({
  id:"grid",
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
`
const HeaderStyled = styled.header.attrs(props=>({
  id: props.id,
}))`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 4rem;
  width: 100%;
  margin: 0;
  padding: 0px;
  border: none;
  box-shadow: ${props=>props.theme.headerShadow};
  box-sizing: border-box;
  z-index: 1000;
  background-color: ${props=>props.theme.bgHeader};
  color: ${props=>props.textColor};
  &.header-is-hide {
    transform: translateY(-4.5rem);
  }
  transition: all 0.5s;
`
const MainStyled = styled.main.attrs(props=>({
  id: 'main',
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
  /*position: relative;
  top: 3.9rem;*/
  box-sizing: border-box;
  margin: 0;
  transition: color 0.5s;
  /*border: 1px solid red;*/
`
const AsideStyled = styled.aside`
  & #icon:hover {
    fill: #0f0;
    cursor: pointer;
  }
`
const FooterStyled = styled.footer.attrs(props=>({
  id: 'footer',
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
`

const CodeStyled = styled.div`
  display: inline-block;
`

@inject('themesStore', 'settingsStore', 'langStore')
@observer
class LayoutStyled extends React.Component {
  prevOffset = 0
  hideElements = () => {
    const header = document.getElementById('header')
    if (window.pageYOffset > 50) {
      header.classList.add('header-is-hide')
    }
    if (window.pageYOffset < 50) {
      header.classList.remove('header-is-hide')
    }
  }
  init = ()=>{
    window.addEventListener('scroll', this.hideElements)
  }
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', this.init );
  }
  render () { return (
    <ThemeProvider theme={this.props.themesStore[this.props.settingsStore.theme]}>
      <GridStyled>
        <GlobalStyle />
          <HeaderStyled id="header">
            <Nav />
          </HeaderStyled>
          <Drawer />
          <MainStyled>
            <MainContent />        
          </MainStyled>
          <AsideStyled>
          
          </AsideStyled>
          <FooterStyled>
            FOOTER
          </FooterStyled>
          <BackToTop />
      </GridStyled>
    </ThemeProvider>
  )}
}
export default LayoutStyled
