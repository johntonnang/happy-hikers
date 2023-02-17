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
  <video ref="videoBackground" autoplay muted loop id="hiker-background">
    <source
      id="video-source"
      src="/assets/hiker-background.mp4"
      type="video/mp4"
    />
  </video>
  <p>{{ msg }}</p>
</template>

<style>
  p {
    font-weight: bold;
  }
  #hiker-background {
    max-width: 70%;
  }
</style>
