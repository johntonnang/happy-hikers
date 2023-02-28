<template>
  <footer class="footer">
    <div class="footer-top">
      <ul>
        <li class="bold-footer-text"><a href="#">Customer service</a></li>
        <li><a href="mailto:happyhikers@iths.se">Contact us</a></li>
        <li><a href="#">Common questions</a></li>
        <li><a href="#">Purchase conditions</a></li>
      </ul>
      <ul>
        <li class="bold-footer-text"><a href="#">About us</a></li>
        <li><a href="#">About Happy Hikers</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Sustainability</a></li>
      </ul>
    </div>
    <div class="footer-bottom">
      <p><b>Follow us</b></p>
      <p>Download our app at to iOS or Android</p>
      <div class="links-container">
        <a
          href="https://www.facebook.com/groups/663870405804535/"
          target="_blank"
        >
          <img src="/assets/facebook.svg" alt="Facebook logo"
        /></a>
        <a
          href="https://instagram.com/happyhikers2023?igshid=YmMyMTA2M2Y="
          target="_blank"
          ><img src="/assets/instagram.svg" alt="Instagram logo"
        /></a>
        <a href="https://twitter.com/mahasrithanet" target="_blank"
          ><img src="/assets/twitter.svg" alt="Twitter logo"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    position: relative;
    top: 100px;
    display: grid;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    background-color: #eee;
  }

  .footer-top {
    display: flex;
    width: 100vw;
    padding: 1rem;
  }

  .footer-top ul {
    width: 140px;
    padding: 0px;
    margin-right: 30px;
    list-style: none;
  }

  .links-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-right a {
    margin-left: 1rem;
    text-decoration: none;
    color: #333;
  }
  p {
    margin: 0px;
    margin-left: 1rem;
  }
  .bold-footer-text {
    font-weight: bold;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  img {
    width: 30px;
  }
  @media (min-width: 600px) {
    .footer {
      display: flex;
    }
    .footer-bottom {
      width: 100vw;
      padding: 1rem;
      margin-top: 1rem;
    }
    .links-container {
      display: flex;
      justify-content: start;
      margin-left: 1rem;
    }
  }
</style>
