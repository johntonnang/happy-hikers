<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="smallbox">
        <div class="box">
          <ul>
            <li class="bold-footer-text">Customer service</li>
            <li><a href="mailto:happyhikers@iths.se">Contact us</a></li>
            <router-link to="/CommonQuestionsView"
              ><li><a href="#">Common questions</a></li></router-link
            >
            <li><a href="#">Purchase conditions</a></li>
          </ul>
        </div>
        <div class="box">
          <ul>
            <li class="bold-footer-text">Company</li>
            <li>
              <router-link to="/AboutView">About Happy Hikers</router-link>
            </li>
            <li><router-link to="/StoreView">Stores</router-link></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
      </div>
      <div class="smallbox">
        <div class="box">
          <ul>
            <li class="bold-footer-text">Resources</li>
            <li><router-link to="/BlogView">Blog</router-link></li>
            <li><router-link to="/NewsletterView">Newsletter</router-link></li>
            <li><a href="#">Events</a></li>
            <li><router-link to="/TutorialsView">Tutorials</router-link></li>
          </ul>
        </div>
        <div class="box">
          <ul>
            <li class="bold-footer-text">Legal</li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Cookies</a></li>
            <li><a href="">Terms of service</a></li>
            <li><a href="">Licenses</a></li>
          </ul>
        </div>
      </div>
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
    margin-top: 5rem;
    position: relative;
    height: 60vh;
    bottom: 0;
    left: 0;
    background-color: rgba(2, 70, 2, 0.716);
    max-width: 100%;
    max-height: 100%;
    color: #e6e6e6;
  }

  .footer-container {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
  }

  .footer-container ul {
    margin: 1rem;
    list-style: none;
  }

  .social-media-icon {
    margin: 2rem;
  }
  .smallbox {
    display: flex;
    width: 50%;
    flex-direction: row;
  }
  .box {
    width: 100%;
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
    margin-left: 35%;
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
  @media (max-width: 850px) {
    .smallbox {
      display: flex;
      width: 50%;
      flex-direction: column;
      margin-left: 2rem;
    }
    .box {
      min-height: 14rem;
    }
    .footer {
      height: 100vh;
    }
    .links-container {
      position: absolute;
      top: 100;
      margin-top: 10%;
      margin-left: 25%;
    }
  }
  @media (max-width: 450px) {
    .footer-container {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
    .box {
      min-height: 8rem;
    }
    .smallbox {
      display: flex;
      margin-left: 1rem;
      width: 90%;
    }
    .footer {
      height: 160vh;
    }
    .links-container {
      margin-top: 7rem;
      margin-left: 10%;
    }
  }
</style>
