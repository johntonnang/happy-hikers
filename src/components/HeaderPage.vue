<script>
  export default {
    props: {
      msg: {
        required: true,
        type: String
      }
    },
    mounted() {
      this.slowDown()
    },
    methods: {
      slowDown() {
        const videoPlayer = this.$refs.videoBackground
        videoPlayer.playbackRate = 0.5
      }
    }
  }
</script>

<template>
  <div class="video-container">
    <!-- <div class="main-text-container">
      <div class="header-text">
        <h1 class="header-title">Experience nature</h1>
        <p>
          Take a break from the hustle and bustle of city life and immerse
          yourself in the breathtaking beauty of the great outdoors. Hiking is
          the perfect way to reconnect with nature and discover hidden gems that
          are off the beaten path.
        </p>
      </div>
    </div> -->
    <video ref="videoBackground" autoplay muted loop id="hiker-background">
      <source
        id="video-source"
        src="/assets/hiker-background.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .main-text-container {
    display: flex;
    align-items: flex-end;
  }

  .header-text {
    z-index: 1;
    position: absolute;
    justify-content: center;
    max-width: 50%;
    padding: 20px;
    color: #fff;
    font-size: 1.5rem;
  }

  .video-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #hiker-background {
    height: 100vh;
    filter: brightness(75%);
  }

  // .scroll-container {
  //   position: absolute;
  //   top: 92%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   z-index: 10;
  // }

  // .scroll-down {
  //   background-color: #ffffff00;
  //   width: 60px;
  //   height: 60px;
  //   border: 2px solid #fff;
  //   border-radius: 50%;
  //   animation: down 1.5s infinite;
  //   -webkit-animation: down 1.5s infinite;
  //   &::before {
  //     content: '';
  //     position: absolute;
  //     top: 15px;
  //     left: 18px;
  //     width: 18px;
  //     height: 18px;
  //     border-left: 2px solid #fff;
  //     border-bottom: 2px solid #fff;
  //     transform: rotate(-45deg);
  //   }
  // }

  // @keyframes down {
  //   0% {
  //     transform: translate(0);
  //   }
  //   20% {
  //     transform: translateY(15px);
  //   }
  //   40% {
  //     transform: translate(0);
  //   }
  // }

  // @-webkit-keyframes down {
  //   0% {
  //     transform: translate(0);
  //   }
  //   20% {
  //     transform: translateY(15px);
  //   }
  //   40% {
  //     transform: translate(0);
  //   }
  // }

  // @media screen and (max-width: 1400px) {
  //   .scroll-down {
  //     display: none;
  //   }
  // }
</style>
