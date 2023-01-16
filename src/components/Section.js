import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div `
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 40px;
    position: relative;
    

    @media (max-width: 640px) {
        max-width: 640px;
        height: 920px;
    }
`
const SectionLogo = styled.img`
    align-self: end;
    width: 120px;
    margin: 0 auto;
`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;

    @media (max-width: 720px) {
        grid-template-columns: 1fr ;
    }

`
const SectionTitle = styled.h3`
        color: white;
        font-size: 60px;
        line-height: 1.2;
    @media (max-width: 720px) {
    font-size: 40px;
}

`
const SectionText = styled.p`
    color: rgba(255,255,255, 0.8);
`
const WaveTop = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    transform: rotate(180deg);
    height: 172px;
`

const WaveBottom = styled.div `
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 172px;

`


const Section = props => (
    <SectionGroup image={props.image}>
    <WaveTop><Wave/></WaveTop>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
        <WaveBottom><Wave/></WaveBottom>
    </SectionGroup>

)

export default Section