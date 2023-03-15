<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="smallbox">
        <div class="box">
          <ul>
            <li class="bold-footer-text">Customer service</li>
            <li><a href="mailto:happyhikers@iths.se">Contact us</a></li>

            <li>
              <router-link to="/CommonQuestionsView"
                >Common questions</router-link
              >
            </li>

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
    position: relative;
    height: 60vh;
    bottom: 0;
    left: 0;
    /* background-color: rgba(2, 70, 2, 0.716); */
    background-color: rgba(var(--bg-primary), 0.7);
    color: #e6e6e6;
    margin-top: 2rem;
    font-size: 1.2rem;
  }

  .footer-container {
    padding-top: 3rem;
    display: flex;
  }

  .footer-container ul {
    margin: 1rem;
    list-style: none;
  }

  ul {
    padding: 0;
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-left: 2rem;
  }

  .links-container {
    position: absolute;
    top: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .bold-footer-text {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  a,
  router-link {
    text-decoration: none;
    color: #e6e6e6;
    transition: all 0.35s;
  }

  a:hover {
    color: #d6d6d6;
  }

  img {
    width: 30px;
  }

  @media (min-width: 901px) and (max-width: 1000px) {
    .footer {
      height: 80vh;
    }
    .links-container {
      margin-top: 1rem;
    }
  }

  @media (min-width: 801px) and (max-width: 900px) {
    .footer {
      height: 80vh;
    }
    .links-container {
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 800px) {
    .footer {
      height: 80vh;
    }
    .links-container {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .footer {
      font-size: 1rem;
      height: 80vh;
    }
    .links-container {
      margin-top: 1rem;
    }
  }

  @media (min-width: 591px) and (max-width: 767px) {
    .footer {
      height: 80vh;
    }
    .links-container {
      margin-top: 1rem;
    }
  }

  @media (max-width: 590px) {
    .footer-container {
      display: grid;
    }
    .box {
      width: 100%;
      justify-content: flex-start;
    }
    .smallbox {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .footer {
      height: 100vh;
    }
    .links-container {
      margin-top: 4rem;
    }
  }
</style>
