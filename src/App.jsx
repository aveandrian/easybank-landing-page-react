import './App.css'
import Navbar from './components/Navbar'
import WhyItem from './components/WhyItem'
import ArticleItem from './components/ArticleItem'
import whyData from './whyData.json'
import articlesData from './articlesData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faYoutube, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <>

      <Navbar />
      <section className='header'>
        <picture>
          <source srcSet='/images/bg-intro-mobile.svg' media='(max-width: 65.625rem)' />
          <img src='/images/bg-intro-desktop.svg' className='intro' />
        </picture>
        <img src='/images/image-mockups.png' className='mockups' />
        <h1 className='main-title'>Next generation digital banking</h1>

        <p className='main-text'>Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>

        <button className='invite-btn'>Request Invite</button>
      </section>
      <section className='why'>
        <h1 className='why-title'>Why choose Easybank?</h1>
        <p className='why-text'> 
          We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.
        </p>
        <div className='why-items-container'>
          {whyData.map(whyItem => <WhyItem key={whyItem.id} {...whyItem} />)}
        </div>
      </section>
      <section className='articles'>
        <h2 className='articles-title'>Latest Articles</h2>
        <div className='articles-container'>
          {articlesData.map(articleItem => <ArticleItem key={articleItem.id} {...articleItem}/>)}
        </div>
      </section>
      <footer>
        <div className='footer-content'>
          <div className='contacts'>
            <img className='logo' src='/images/logo.svg' />
            <div className='socials'>
              <FontAwesomeIcon icon={faFacebookSquare} className='social-logo' />
              <div className='youtube-icon-container' >
                <FontAwesomeIcon icon={faYoutube} size='xs'/>
              </div>
              <FontAwesomeIcon icon={faTwitter} className='social-logo'/>
              <FontAwesomeIcon icon={faPinterest} className='social-logo' />
              <FontAwesomeIcon icon={faInstagram} className='social-logo' />
            </div>
          </div>
          <div className='footer-links'>
            <div className='footer-links-column'>
              <a>About Us</a>
              <a>Contact</a>
              <a>Blog</a>
            </div>
            <div className='footer-links-column'>
              <a>Careers</a>
              <a>Support</a>
              <a>Privacy Policy</a>
            </div>
          </div>
          <div className='footer-btn'>
            <button className='invite-btn'>Request Invite</button>
            <p className='credits'> © Easybank. All Rights Reserved</p>
          </div>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
        </div>
      </footer>

  
  
    </>
  )
}

export default App
