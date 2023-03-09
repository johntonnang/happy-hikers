<script>
  export default {
    data() {
      return {
        selectedBlog: null,
        blogs: [
          {
            imageSrc:
              'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
            imageAlt: 'Mountain Hiking',
            title: 'Hiking Trip to the Mountains',
            shortText:
              'Last weekend, I went on a hiking trip to the mountains with my friends. We woke up early in the morning, eager to begin our adventure. As we started our hike, we were greeted with stunning views of the surrounding nature. The sun was shining, and the air was crisp and fresh. We hiked through dense forests, crossed streams, and climbed steep cliffs. It was an amazing experience that I will never forget, and it left me feeling energized and inspired.',
            longText: `Choose a trail that matches your skill level and fitness.\nCheck the weather forecast and prepare accordingly.\nBring enough water and snacks to keep you energized throughout the hike.\nWear comfortable and sturdy shoes to protect your feet and ankles.\nRespect nature and leave no trace by packing all your trash.`,
            date: '2023-02-01'
          },
          {
            imageSrc:
              'https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2122&q=80',
            imageAlt: 'Hiking snow tent',
            title: 'Snowy Mountain Hike',
            shortText:
              'Winter hiking is a unique experience that requires a   little extra preparation. My recent hike up a snowy mountain was both challenging and rewarding. The fresh snowfall made the scenery even more stunning, but it also meant we had to be extra cautious with our footing.',
            longText:
              "Dress in layers: It's important to wear warm, waterproof clothing in snowy conditions. Dressing in layers allows you to adjust your clothing as you heat up during the hike.\nWear appropriate footwear: Hiking boots with good traction are essential in snowy conditions. Make sure your boots are waterproof and insulated to keep your feet warm and dry.\nBring plenty of water: Even though it's cold, you still need to stay hydrated during your hike. Pack enough water and bring a thermos filled with a warm beverage to help you stay warm.\nBe aware of avalanche danger: In snowy conditions, there is always a risk of avalanches. Check avalanche conditions before your hike and avoid areas with a high risk of avalanches.\nUse trekking poles: Trekking poles provide extra stability in snowy conditions and can help you maintain your balance on slippery surfaces.",
            date: '2022-12-05'
          },
          {
            imageSrc:
              'https://images.unsplash.com/photo-1517701491738-81f146bae705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            imageAlt: 'Hiking rainforest tent campfire',
            title: 'Rainforest Adventure',
            shortText:
              'Exploring the lush rainforest on a recent trip was a truly unforgettable experience. The sights and sounds of the exotic wildlife and vegetation were unlike anything I had ever seen before. However, hiking in a rainforest also poses some unique challenges that require careful planning and preparation.',
            longText: `Wear lightweight and breathable clothing that covers your skin to protect against insects and scratches from vegetation.\nWear sturdy hiking shoes with good traction to prevent slips and falls on wet, muddy terrain.\nCarry plenty of water and snacks, as the high humidity and heat can quickly deplete your energy.\nBe aware of dangerous wildlife in the area and follow local guidelines for safety.\nTake breaks often and enjoy the beautiful scenery around you.`,
            date: '2022-08-15'
          }
        ]
      }
    }
  }
</script>

<template>
  <main>
    <div class="blog-container">
      <div v-for="(blog, index) in blogs" :key="index" class="blog-row">
        <div class="blog-item">
          <div class="blog-item-image">
            <img :src="blog.imageSrc" :alt="blog.imageAlt" class="blog-image" />
          </div>
          <div class="blog-item-text">
            <h1>{{ blog.title }}</h1>
            <p class="short-text">{{ blog.shortText }}</p>
            <div v-if="selectedBlog === index" class="long-text">
              <p>
                If you're planning a similiar hike, here are some things to keep
                in mind:
              </p>
              <ol>
                <li v-for="(item, idx) in blog.longText.split('\n')" :key="idx">
                  {{ item }}
                </li>
              </ol>
              <p>
                Following these tips will help you have a safe and enjoyable
                hiking trip! You can check out our
                <router-link class="product-direction" to="/ProductCatalog"
                  >products</router-link
                >
                that will surely help you on your journey.
              </p>
            </div>
            <button
              class="read-more-btn"
              @click="selectedBlog = selectedBlog === index ? null : index"
            >
              {{ selectedBlog === index ? 'Read Less' : 'Read More' }}
            </button>
            <span class="date">{{ blog.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    position: relative;
    top: 150px;
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
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
    flex-direction: column;
  }

  .blog-item-image {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
  }

  .blog-item-text {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
  }

  .blog-image {
    width: 100%;
    border-radius: 5px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  ol {
    margin: 1rem;
  }

  .read-more-btn {
    border-radius: 5px;
    border: 1px solid black;
    padding: 0.3rem;
    transition: all 0.35s;
  }

  .read-more-btn:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
  }

  .date {
    float: right;
    opacity: 0.5;
  }

  .product-direction {
    color: #333;
  }

  @media screen and (max-width: 768px) {
    .blog-container {
      max-width: 600px;
    }
  }

  @media screen and (max-width: 400px) {
    .blog-container {
      max-width: 350px;
    }
  }
</style>
