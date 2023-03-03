<template>
  <footer class="footer">
    <div class="footer-container">
      <ul>
        <li class="bold-footer-text"><a href="#">Customer service</a></li>
        <li><a href="mailto:happyhikers@iths.se">Contact us</a></li>
        <li><a href="#">Common questions</a></li>
        <li><a href="#">Purchase conditions</a></li>
      </ul>
      <ul>
        <li class="bold-footer-text"><a href="#">Company</a></li>
        <li><a href="#">About Happy Hikers</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Sustainability</a></li>
      </ul>
      <ul>
        <li class="bold-footer-text"><a href="#">Resources</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Tutorials</a></li>
      </ul>
      <ul>
        <li class="bold-footer-text"><a href="">Legal</a></li>
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
  /* .footer {
    position: relative;
    top: 100px;
    height: 35vh;
    bottom: 0;
    left: 0;
    background-color: rgba(2, 70, 2, 0.716);
  } */

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
  a {
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

  @media (min-width: 375px) and (max-width: 500px) {
    footer {
      margin-top: 40px;
    }
    .footer {
      position: relative;
      padding-top: 50px;
      top: 100px;
      height: 50vh;
      bottom: 0;
      left: 0;
      background-color: rgba(2, 70, 2, 0.716);
      max-width: 100%;
    }
    .footer-container {
      justify-content: space-around;
      display: flex;
      /* width: 100vw; */
      /* padding: 2rem; */
    }

    .footer-container ul {
      width: 50px;
      /* padding: 0px; */
      margin-right: 40px;
      list-style: none;
    }

    .social-media-icon {
      padding-top: 30px;
      margin: 2rem;
    }
  }
</style>
