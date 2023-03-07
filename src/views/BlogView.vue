<template>
  <main>
    <div class="blog-container">
      <div class="blog-row">
        <div class="blog-item">
          <h1>Boots</h1>
          <p class="short-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultricies nunc ac velit faucibus ultrices. Curabitur sit amet sapien
            quis mauris laoreet feugiat non et lectus. Nam eget nunc sed risus
            mollis volutpat. Donec eget magna sodales, venenatis ipsum in,
            facilisis lectus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Proin sed placerat sapien.
            Ut sagittis vehicula dolor eu venenatis. Sed mollis sapien in quam
            laoreet euismod. Nunc ullamcorper, enim ac vestibulum interdum,
            tortor velit aliquam elit, quis bibendum odio nunc ac lorem. Sed
            tempor felis a lacinia maximus.
          </p>
          <p v-if="showText" class="long-text">
            Nulla facilisi. In hac habitasse platea dictumst. Duis vel quam
            lobortis, viverra nunc ut, pellentesque augue. Fusce semper justo
            purus, ac porttitor risus blandit at. Morbi pellentesque leo vitae
            mauris suscipit dapibus. Nunc rhoncus ligula id ligula interdum, at
            feugiat nulla ultricies. Proin dictum magna nec mauris pulvinar
            pharetra. Fusce malesuada felis augue, quis feugiat sapien malesuada
            eget. Praesent sollicitudin laoreet augue, in ullamcorper felis
            lobortis sed. Nulla congue tristique ante, id eleifend elit
            efficitur quis. Nullam vel fringilla elit, ut dapibus nunc. Integer
            hendrerit, lorem ut maximus euismod, lorem augue auctor elit, quis
            viverra elit elit nec lacus.
          </p>
          <button class="read-more-btn" @click="showText = !showText">
            {{ showText ? 'Read Less' : 'Read More' }}
          </button>
        </div>
        <div class="blog-item">
          <h1>Boots</h1>
          <p class="short-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultricies nunc ac velit faucibus ultrices. Curabitur sit amet sapien
            quis mauris laoreet feugiat non et lectus. Nam eget nunc sed risus
            mollis volutpat. Donec eget magna sodales, venenatis ipsum in,
            facilisis lectus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Proin sed placerat sapien.
            Ut sagittis vehicula dolor eu venenatis. Sed mollis sapien in quam
            laoreet euismod. Nunc ullamcorper, enim ac vestibulum interdum,
            tortor velit aliquam elit, quis bibendum odio nunc ac lorem. Sed
            tempor felis a lacinia maximus.
          </p>
          <p v-if="showText" class="long-text">
            Nulla facilisi. In hac habitasse platea dictumst. Duis vel quam
            lobortis, viverra nunc ut, pellentesque augue. Fusce semper justo
            purus, ac porttitor risus blandit at. Morbi pellentesque leo vitae
            mauris suscipit dapibus. Nunc rhoncus ligula id ligula interdum, at
            feugiat nulla ultricies. Proin dictum magna nec mauris pulvinar
            pharetra. Fusce malesuada felis augue, quis feugiat sapien malesuada
            eget. Praesent sollicitudin laoreet augue, in ullamcorper felis
            lobortis sed. Nulla congue tristique ante, id eleifend elit
            efficitur quis. Nullam vel fringilla elit, ut dapibus nunc. Integer
            hendrerit, lorem ut maximus euismod, lorem augue auctor elit, quis
            viverra elit elit nec lacus.
          </p>
          <button class="read-more-btn" @click="showText = !showText">
            {{ showText ? 'Read Less' : 'Read More' }}
          </button>
        </div>
        <div class="blog-item">
          <h1>Boots</h1>
          <p class="short-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultricies nunc ac velit faucibus ultrices. Curabitur sit amet sapien
            quis mauris laoreet feugiat non et lectus. Nam eget nunc sed risus
            mollis volutpat. Donec eget magna sodales, venenatis ipsum in,
            facilisis lectus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Proin sed placerat sapien.
            Ut sagittis vehicula dolor eu venenatis. Sed mollis sapien in quam
            laoreet euismod. Nunc ullamcorper, enim ac vestibulum interdum,
            tortor velit aliquam elit, quis bibendum odio nunc ac lorem. Sed
            tempor felis a lacinia maximus.
          </p>
          <p v-if="showText" class="long-text">
            Nulla facilisi. In hac habitasse platea dictumst. Duis vel quam
            lobortis, viverra nunc ut, pellentesque augue. Fusce semper justo
            purus, ac porttitor risus blandit at. Morbi pellentesque leo vitae
            mauris suscipit dapibus. Nunc rhoncus ligula id ligula interdum, at
            feugiat nulla ultricies. Proin dictum magna nec mauris pulvinar
            pharetra. Fusce malesuada felis augue, quis feugiat sapien malesuada
            eget. Praesent sollicitudin laoreet augue, in ullamcorper felis
            lobortis sed. Nulla congue tristique ante, id eleifend elit
            efficitur quis. Nullam vel fringilla elit, ut dapibus nunc. Integer
            hendrerit, lorem ut maximus euismod, lorem augue auctor elit, quis
            viverra elit elit nec lacus.
          </p>
          <button class="read-more-btn" @click="showText = !showText">
            {{ showText ? 'Read Less' : 'Read More' }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        showText: false
      }
    }
  }
</script>

<style scoped>
  main {
    position: relative;
    top: 100px;
    width: 100%;
    margin-bottom: 8rem;
  }

  .blog-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .blog-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .blog-item {
    width: 100%;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p.short-text {
    font-size: 1;
  }

  .read-more-btn {
    border-radius: 5px;
    border: 1px solid black;
  }
</style>
