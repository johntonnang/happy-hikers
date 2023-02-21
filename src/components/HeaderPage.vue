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
    <div class="main-text-container">
      <div class="header-text">
        <h1 class="header-title">Experience nature</h1>
        <p>
          Take a break from the hustle and bustle of city life and immerse
          yourself in the breathtaking beauty of the great outdoors. Hiking is
          the perfect way to reconnect with nature and discover hidden gems that
          are off the beaten path.
        </p>
      </div>
    </div>
    <video ref="videoBackground" autoplay muted loop id="hiker-background">
      <source
        id="video-source"
        src="/assets/hiker-background.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<style scoped>
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
    max-width: 100%;
    filter: brightness(75%);
  }
</style>
