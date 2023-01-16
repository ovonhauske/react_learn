import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className='Hero'>
      <div className='HeroGroup'>
      <h1>Learn to <br/> design and code React apps</h1>
      <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
     <Link to="/page-2/">Watch Video</Link>


<div className='Logos'>
  <img src={require('../images/logo-sketch.png')} width='50'/>
  <img src={require('../images/logo-figma.png')} width='50'/>
  <img src={require('../images/logo-studio.png')} width='50'/>
  <img src={require('../images/logo-framer.png')} width='50'/>
  <img src={require('../images/logo-react.png')} width='50'/>
  <img src={require('../images/logo-swift.png')} width='50'/>
</div>

    <Wave/>

      </div>
    </div>

    <div className='Cards'>
      <h2>11 Courses, more coming</h2>
        <div className='CardGroup'>
          <Card 
          image={require('../images/wallpaper.jpg')}
          title="12 Sections"
          text="12 Sections"
          />
          <Card 
          image={require('../images/wallpaper.jpg')}
          title="React For Designers"
          text="12 Sections"
          />
          <Card 
          image={require('../images/wallpaper.jpg')}
          title="Figma For Developers"
          text="12 Sections"
          />
          <Card 
          image={require('../images/wallpaper.jpg')}
          title="Nietzche for Designers"
          text="12 Sections"
          />
        </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."

    />
  </div>
)

export default IndexPage

