// import React from 'react';
// import { IonIcon } from '@ionic/react';
// import '@ionic/react/css/core.css';
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';
import React, { useState, useEffect } from 'react';






const Funel = () => {
  // const [isNavbarActive, setNavbarActive] = useState(false);
  // const [isGoTopActive, setGoTopActive] = useState(false);

  // const elemToggleFunc = (elem) => {
  //   elem.classList.toggle("active");
  // };

  // const handleMenuToggle = () => {
  //   setNavbarActive(!isNavbarActive);
  // };

  // const handleScroll = () => {
  //   if (window.scrollY >= 800) {
  //     setGoTopActive(true);
  //   } else {
  //     setGoTopActive(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <header>
        <div className="container">
          <a href="#" className="logo">
            {/* <img src="./src/assets/images/logo.png" alt="Funel logo" /> */}
            <h3>Spark Reach</h3>
          </a>

          <div className="navbar-wrapper">
            <button className="navbar-menu-btn" data-navbar-toggle-btn>
              <ion-icon name="menu-outline"></ion-icon>
            </button>

            <nav className="navbar" data-navbar>
              <ul className="navbar-list">
                <li className="nav-item">
                  <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">What we do</a>
                </li>
                <li className="nav-item">
                  <a href="#features" className="nav-link">Why us?</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">Contact</a>
                </li>
              </ul>
              {/* <button className="btn btn-primary">Sign Up</button> */}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">Your full-funnel growth agency</h1>
                <p className="hero-text">
                  Capture and retrieve your lists across devices to help you stay organized at work, home, and on the go.
                </p>
                <button className="btn btn-primary">Get started</button>
              </div>
              <div className="hero-banner ">
                {/* <img src="./src/assets/images/hero-banner.png" alt=""  style={{width:'100%'}}/> */}
              </div>
            </div>
            <img src="./src/assets/images/bg.png" alt="shape" className="shape-content" />
          </section>

          <section className="about" id="about">
            <div className="container">
              <div className="about-top">
                <h2 className="h2 section-title">What we do</h2>
                <p className="section-text">
                  Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.
                </p>
                <ul className="about-list">
                  <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <ion-icon name="briefcase-outline">#1 logo</ion-icon>
                      </div>
                      <h3 className="h3 card-title">Paid Search and Social Management</h3>
                      <p className="card-text">
                        Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back.
                      </p>
                    </div>
                  </li>
                  {/* <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                      </div>
                      <h3 className="h3 card-title">Direct Response Content</h3>
                      <p className="card-text">
                        Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <ion-icon name="rocket-outline"></ion-icon>
                      </div>
                      <h3 className="h3 card-title">CRO and Retention Optimizations</h3>
                      <p className="card-text">
                        Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back.
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>
              {/* <div className="about-bottom">
                <figure className="about-bottom-banner">
                  <img src="./src/assets/images/about-banner.png" alt="about banner" className="about-banner" />
                </figure>
                <div className="about-bottom-content">
                  <h2 className="h2 section-title">We’re obsessed with growth</h2>
                  <p className="section-text">
                    Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.
                  </p>
                  <button className="btn btn-secondary">Sign Up For Free</button>
                </div>
              </div> */}
            </div>
          </section>

          <section className="features" id="features">
            <div className="container">
              <h2 className="h2 section-title">
                Our team is made up of all different backgrounds from all over the world.
              </h2>
              <p className="section-text">
                Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.
              </p>
              <ul className="features-list">
                <li className="features-item">
                  <figure className="features-item-banner">
                    <img src="./src/assets/images/feature-1.png" alt="feature banner" />
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title">Cover your everyday expenses</h3>
                    <p className="item-text">
                      Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </li>
                <li className="features-item">
                  <figure className="features-item-banner">
                    <img src="./src/assets/images/feature-2.png" alt="feature banner" />
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title">We offer low fees that are transparent</h3>
                    <p className="item-text">
                      Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* <section className="cta">
            <div className="container">
              <div className="cta-card">
                <h3 className="cta-title">Try for 7 days free</h3>
                <p className="cta-text">
                  Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back.
                </p>
                <form action="" className="cta-form">
                  <input type="email" name="email" placeholder="Your email address" />
                  <button type="submit" className="btn btn-secondary">Try It Now</button>
                </form>
              </div>
            </div>
          </section> */}

          <section className="contact" id="contact" style={{color:'white'}}>
            <div className="container">
              <div className="contact-content">
                <h2 className="h2 contact-title">Let’s scale your brand, together</h2>
                <figure className="contact-banner" />
                  <img src="./src/assets/images/contact.png" alt="contact banner" />
</div>
          <form action="" className="contact-form">
            <div className="input-wrapper">
              <label htmlFor="name" className="input-label">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Type Name"
                className="input-field"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="phone" className="input-label">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Type Phone Number"
                className="input-field"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email" className="input-label">Email Address *</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Type Email Address"
                className="input-field"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="message" className="input-label">How can we help? *</label>
              <textarea
                name="message"
                id="message"
                placeholder="Type Description"
                required
                className="input-field"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </article>
  </main>

  {/* <footer>
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="./src/assets/images/logo.png" alt="Funel logo" />
          </a>
          <p className="footer-text">Follow us on</p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-link-box">
          <ul className="footer-link-list">
            <li>
              <h3 className="h4 link-title">Company</h3>
            </li>
            <li>
              <a href="#" className="footer-link">About Us</a>
            </li>
            <li>
              <a href="#" className="footer-link">Features</a>
            </li>
            <li>
              <a href="#" className="footer-link">Pricing</a>
            </li>
          </ul>
          <ul className="footer-link-list">
            <li>
              <h3 className="h4 link-title">Products</h3>
            </li>
            <li>
              <a href="#" className="footer-link">Blog</a>
            </li>
            <li>
              <a href="#" className="footer-link">Help Center</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact</a>
            </li>
          </ul>
          <ul className="footer-link-list">
            <li>
              <h3 className="h4 link-title">Resources</h3>
            </li>
            <li>
              <a href="#" className="footer-link">FAQ’S</a>
            </li>
            <li>
              <a href="#" className="footer-link">Testimonial</a>
            </li>
            <li>
              <a href="#" className="footer-link">Terms & Conditions</a>
            </li>
          </ul>
          <ul className="footer-link-list">
            <li>
              <h3 className="h4 link-title">Relevant</h3>
            </li>
            <li>
              <a href="#" className="footer-link">Why</a>
            </li>
            <li>
              <a href="#" className="footer-link">Products</a>
            </li>
            <li>
              <a href="#" className="footer-link">Customers</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer> */}

    {/* <a href="#top" className="go-top active" data-go-top>
      <ion-icon name="chevron-up-outline"></ion-icon>
    </a> */}
  <script src="./src/assets/js/script.js"></script>
  <script
    type="module"
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
  ></script>
  <script
    nomodule
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
  ></script>
</>
);
};

export default Funel;
