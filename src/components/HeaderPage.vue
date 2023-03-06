<script>
  export default {
    data() {
      return {
        y: 'translateY(0px)',
        x: 'translateX(0px)',
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
      closeChat() {
        this.y = 'translateY(200%)'
        this.x = 'translateX(100%)'
      },
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
  <div class="chat-container" :style="{ transform: y + x }">
    <div class="chat-box">
      <div class="chat-support">
        <div class="chat-header">
          <div class="img-container">
            <img src="/assets/jonkri-bot.png" alt="" />
          </div>
          <h3>JonKri Bot</h3>
          <button @click="closeChat" class="close-btn">
            <span class="cross-icon">&#x2715;</span>
          </button>
        </div>
        <div id="root" />
      </div>
      <div class="chat-dialog">
        <div class="chat-greeting">
          <p>
            Hello there, my name is JonKri Bot. How may I assist you today? 👋
          </p>
        </div>
        <div class="chat-input-container">
          <input
            class="chat-input"
            type="text"
            placeholder="Ask JonKri Bot..."
          />
          <button class="arrow-right">
            <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
          </button>
        </div>
      </div>
    </div>
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
  }

  #hiker-background {
    width: 100%;
    scale: 1.06;
    // filter: brightness(75%);
  }

  // JonKri support bot
  .chat-container {
    display: none;
    // display: flex;
    // flex-direction: row;
    // justify-content: flex-end;
    // height: 400px;
    // width: 300px;
    // z-index: 10;
    // position: fixed;
    // right: 20px;
    // bottom: 20px;
    // transition: all 0.3s ease-in-out;
  }

  .chat-box {
    display: flex;
    height: 100%;
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid rgba(128, 128, 128, 0.491);
    border-radius: 5px;
  }
  .close-btn {
    background: #424242;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 100%;
    margin: 0 8px 8px;
    align-self: end;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }

  .cross-icon {
    font-size: 1.1rem;
  }

  .chat-support {
    display: flex;
    flex-direction: column;
    width: 391px;
    padding: 8px;
    max-width: 100%;
    background: #579d5d;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.491);
    color: #f1f1f1;
  }

  .chat-header {
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 50px;
    width: 100%;
  }

  .img-container img {
    width: 40px;
    border-radius: 100%;
    margin: 10px;
  }

  .chat-dialog {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .chat-greeting {
    width: 250px;
    color: #f1f1f1;
    background-color: #579d5d;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
  }

  .chat-greeting p {
    margin: 0.5rem;
    width: fit-content;
  }

  .chat-input-container {
    display: flex;
    border-radius: 50px;
    background: white;
    box-shadow: 0px 0px 5px grey;
    width: 80%;
    padding: 0.5rem;
    margin: 20px;
    align-items: center;
    justify-content: center;
  }

  .chat-input {
    border: none;
    overflow: auto;
    padding-right: 1rem;
    outline: none;
  }

  .arrow-right {
    color: black;
    border: none;
    background: #fff;
  }

  @keyframes slideaway {
    from {
      display: block;
    }
    to {
      transform: translateY(400px);
    }
  }

  // .chat-container {
  //   animation: slideaway 200ms;
  // }
</style>
