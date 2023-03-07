<script>
  export default {
    data() {
      return {
        mouseX: 0,
        mouseY: 0
      }
    },
    // mounted() {
    //   this.slowDown()
    // },
    methods: {
      // slowDown() {
      //   const videoPlayer = this.$refs.videoBackground
      //   videoPlayer.playbackRate = 0.5
      // },
      handleMouseMove(event) {
        const videoEl = this.$refs.videoBackground
        const videoWidth = videoEl.offsetWidth
        const videoHeight = videoEl.offsetHeight
        const translateX = (videoWidth / 2 - event.clientX) * 0.05
        const translateY = (videoHeight / 2 - event.clientY) * 0.05
        videoEl.style.transform = `translate(${translateX}px, ${translateY}px)`
      }
    }
  }
</script>

<template>
  <div class="video-container" @mousemove="handleMouseMove">
    <video ref="videoBackground" autoplay muted loop id="hiker-background">
      <source
        id="video-source"
        src="/assets/happy-hikers-background.mp4"
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

  .video-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  }

  #hiker-background {
    width: 100%;
    scale: 1.1;
    // filter: brightness(75%);
  }
</style>
