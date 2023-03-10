<template>
  <footer class="footer">
    <div class="footer-container">
      <ul>
        <li class="bold-footer-text">Customer service</li>
        <li><a href="mailto:happyhikers@iths.se">Contact us</a></li>
        <router-link to="/CommonQuestionsView"
          ><li><a href="#">Common questions</a></li></router-link
        >
        <li><a href="#">Purchase conditions</a></li>
      </ul>
      <ul>
        <li class="bold-footer-text">Company</li>
        <li><router-link to="/AboutView">About Happy Hikers</router-link></li>
        <li><router-link to="/StoreView">Stores</router-link></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Sustainability</a></li>
      </ul>
      <ul>
        <li class="bold-footer-text">Resources</li>
        <li><router-link to="/BlogView">Blog</router-link></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Events</a></li>
        <li><router-link to="/TutorialsView">Tutorials</router-link></li>
      </ul>
      <ul>
        <li class="bold-footer-text">Legal</li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Cookies</a></li>
        <li><a href="">Terms of service</a></li>
        <li><a href="">Licenses</a></li>
      </ul>
      <div class="links-container">
        <a
          href="https://www.facebook.com/groups/663870405804535/"
          target="_blank"
          ><img
            class="social-media-icon"
            src="/assets/facebook.svg"
            alt="Facebook logo"
        /></a>

        <a
          href="https://instagram.com/happyhikers2023?igshid=YmMyMTA2M2Y="
          target="_blank"
          ><img
            class="social-media-icon"
            src="/assets/instagram.svg"
            alt="Instagram logo"
        /></a>

        <a href="https://twitter.com/mahasrithanet" target="_blank"
          ><img
            class="social-media-icon"
            src="/assets/twitter.svg"
            alt="Twitter logo"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    position: relative;
    top: 100px;
    height: 45vh;
    bottom: 0;
    left: 0;
    background-color: rgba(2, 70, 2, 0.716);
    max-width: 100%;
    max-height: 100%;
    color: #e6e6e6;
  }

  .footer-container {
    justify-content: space-around;
    display: flex;
    width: 100vw;
    padding: 2rem;
  }

  .footer-container ul {
    width: 30px;
    padding: 0px;
    margin-right: 40px;
    list-style: none;
  }

  .social-media-icon {
    margin: 2rem;
  }

  /* .footer-container {
    justify-content: space-around;
    display: flex;
    width: 100vw;
    padding: 2rem;
  } */

  /* .footer-container ul {
    width: 140px;
    padding: 0px;
    margin-right: 30px;
    list-style: none;
  } */

  .links-container {
    display: flex;
    position: absolute;
    top: 70%;
    margin: 1rem;
  }

  /* .social-media-icon {
    margin: 1rem;
  } */

  .bold-footer-text {
    font-weight: bold;
    margin-bottom: 10px;
  }
  a,
  router-link {
    text-decoration: none;
    color: #e6e6e6;
    transition: all 0.35s ease-in-out;
  }

  a:hover {
    color: #d6d6d6;
  }

  img {
    width: 30px;
  }
  @media (max-width: 600px) {
    .footer {
      display: flex;
    }
  }

  @media (min-width: 801px) and (max-width: 1500px) {
    .footer {
      padding-top: 40px;
      height: 70vh;
    }
  }

  @media (min-width: 601px) and (max-width: 800px) {
    .footer {
      padding-top: 40px;
      height: 70vh;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    .footer {
      padding-top: 40px;
      height: 70vh;
    }

    .social-media-icon {
      margin: 2rem;
    }

    .footer-container ul {
      width: 50px;
      margin-right: 40px;
    }
  }

  @media (min-width: 360px) and (max-width: 500px) {
    #links-container {
      top: 40px;
    }

    footer {
      margin-top: 30px;
    }
    .footer {
      padding-top: 40px;
      height: 70vh;
    }

    .footer-container ul {
      width: 50px;
      margin-right: 13%;
      /* padding-right: 20%; */
    }
  }
</style>
