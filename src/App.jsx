import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>

      <Navbar />
      <section className='header'>
        <picture>
          <source srcSet='/images/bg-intro-mobile.svg' media='(max-width: 1050px)' />
          <img src='/images/bg-intro-desktop.svg' className='intro' />
        </picture>
        <img src='/images/image-mockups.png' className='mockups' />
        <h1 className='main-title'>Next generation digital banking</h1>

        <p className='main-text'>Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>

        <button className='invite-btn'>Request Invite</button>
      </section>
      <div className='under-test'></div>
      {/* <img src='/images/bg-intro-desktop.svg'></img>
      <img src='/images/image-mockups.png'></img> */}

 



  Why choose Easybank?

  We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.

  Online Banking
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.

  Simple Budgeting
  See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.

  Fast Onboarding
  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.

  Open API
  Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.

  

  Latest Articles

  By Claire Robinson
  Receive money in any currency with no fees
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …

  By Wilson Hutton
  Treat yourself without worrying about money
  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …

  By Wilson Hutton
  Take your Easybank card wherever you go
  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …

  By Claire Robinson
  Our invite-only Beta accounts are now live!
  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...

  

  About Us
  Contact
  Blog
  Careers
  Support
  Privacy Policy

  Request Invite

  © Easybank. All Rights Reserved
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </>
  )
}

export default App
