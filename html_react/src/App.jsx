import './App.css'

function App() {
  

  return (
<div id="w" itemScope itemType="http://schema.org/Person">
  <header className="clearfix">
    <div id="info">			
      <h1><span itemProp="name">Jake Rocheleau</span></h1>
      <h3><span itemProp="jobTitle">Freelance Writer &amp; Web Developer</span></h3>
      <small itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        <span itemProp="addressLocality">Hudson</span>, 
        <span itemProp="addressRegion">Massachusetts</span>, 
        <span itemProp="addressCountry">USA</span>
      </small>
      <small><span itemProp="email">jakerocheleau@gmail.com</span></small>
      <small><a href="http://byjakewithlove.com/" itemProp="url">My Portfolio</a> • <a href="http://twitter.com/jakerocheleau" itemProp="url">@jakerocheleau</a></small>
    </div>
    <div id="photo">
      <img src="C:/Users/user/Desktop/Kuliahan/FEC/responsive-resume/html_react/src/assets/images/jake-rocheleau-250.jpg" alt="Jake Rocheleau resume photo avatar" itemProp="image" />
    </div>
  </header>
  <section id="profile">
    <h2>My History &amp; Profile</h2>
    <p itemProp="description">I'm a 21 year old web designer and developer working out of eastern Massachusetts. I have been coding websites ever since sophomore year of high school in my first web design class. Fast-forward a few years later I was landing freelance projects most of my junior and senior years. During this time I was also working part-time at Best Buy's Geek Squad division.</p>
    <p>After graduating High School in summer 2009 I started writing on various web design blogs along with launching my own startup ideas. A few months later in September 2009 I spent a couple months studying at <a href="http://www.wpi.edu/">Worcester Polytechnic Institute</a> in Worcester, Massachsuetts. However I left in January 2010 to pursue a career on my own. I now work doing freelance writing and building side-projects in my spare time.</p>
  </section>
  <section id="skills" className="clearfix" itemScope itemType="http://schema.org/ItemList">
    <h2 itemProp="name">Skillset</h2>
    <section id="skills-left">
      <h4 itemProp="about">Development</h4>
      <ul>
        <li itemProp="itemListElement">HTML5/CSS3</li>
        <li itemProp="itemListElement">JavaScript &amp; jQuery</li>
        <li itemProp="itemListElement">PHP Backend</li>
        <li itemProp="itemListElement">SQL Databases</li>
        <li itemProp="itemListElement">Wordpress</li>
        <li itemProp="itemListElement">Pligg CMS</li>
        <li itemProp="itemListElement">Some Objective-C</li>
      </ul>
    </section>
    <section id="skills-right">
      <h4 itemProp="about">Software</h4>
      <ul>
        <li itemProp="itemListElement">Adobe Photoshop</li>
        <li itemProp="itemListElement">Adobe Dreamweaver</li>
        <li itemProp="itemListElement">MS Office 2007-2010</li>
        <li itemProp="itemListElement">cPanel &amp; phpMyAdmin</li>
        <li itemProp="itemListElement">Xcode 4</li>
      </ul>
    </section>
  </section>
  <section id="education">
    <h2>Past Education</h2>
    <p><span itemProp="alumniOf">Hudson High School</span> graduate of 2009.</p>
  </section>
  <section id="experience">
    <h2>Work Experience</h2>
    <p>Freelance Web Designer/Developer ~ 2007-2009</p>
    <p>Best Buy - Geek Squad In-Store Agent ~ 2008-2009</p>
    <p>Freelance Writer for <span itemProp="worksFor">Hongkiat.com</span> ~ 2011-Present</p>
  </section>
  <section id="articles">
    <h2>Recent Articles</h2>
    <p itemScope itemType="http://schema.org/Article">
      <span itemProp="name">
        <a href="http://www.hongkiat.com/blog/css-javascript-fallback-methods/" itemProp="url" title="10 Useful Fallback Methods For CSS And Javascript">10 Useful Fallback Methods For CSS And Javascript</a></span> • Published in <span itemProp="datePublished">July 2012</span></p>
    <p itemScope itemType="http://schema.org/Article">
      <span itemProp="name">
        <a href="http://www.hongkiat.com/blog/wordpress-url-rewrite/" itemProp="url" title="Rewriting URLs In WordPress: Tips And Plugins">Rewriting URLs In WordPress: Tips And Plugins</a></span> • Published in <span itemProp="datePublished">July 2012</span></p>
    <p itemScope itemType="http://schema.org/Article">
      <span itemProp="name">
        <a href="http://www.hongkiat.com/blog/jpeg-optimization-guide/" itemProp="url" title="JPEG Optimization For The Web – Ultimate Guide">JPEG Optimization For The Web – Ultimate Guide</a></span> • Published in <span itemProp="datePublished">July 2012</span></p>
    <p itemScope itemType="http://schema.org/Article">
      <span itemProp="name">
        <a href="http://www.hongkiat.com/blog/design-perfect-newsletter/" itemProp="url" title="9 Tricks To Design The Perfect HTML Newsletter">9 Tricks To Design The Perfect HTML Newsletter</a></span> • Published in <span itemProp="datePublished">May 2012</span></p>
    <p itemScope itemType="http://schema.org/Article">
      <span itemProp="name">
        <a href="http://www.hongkiat.com/blog/google-website-optimizer-ab-testing-guide/" itemProp="url" title="Guide To A/B Testing With Google Website Optimizer">Guide To A/B Testing With Google Website Optimizer</a></span> • Published in <span itemProp="datePublished">March 2012</span></p>
  </section>
</div>

  )
}

export default App
