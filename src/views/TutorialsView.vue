<template>
  <main>
    <div class="tutorials-container">
      <h2>Tutorials</h2>
      <div class="tutorial-row">
        <div class="tutorial-item">
          <h3>How to Cook a Meal on a Hike</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ajf_FWQRMiw"
            frameborder="0"
            allowfullscreen
          />
          <ol>
            <li>Choose a lightweight, portable stove and fuel</li>
            <li>
              Plan your meal and pack appropriate ingredients and cooking tools
            </li>
            <li>Select a suitable cooking location and clear the area</li>
            <li>Set up your stove and ignite it safely</li>
            <li>Cook your meal and monitor the stove carefully</li>
            <li>Clean up after cooking and pack out all waste</li>
          </ol>
        </div>

        <div class="tutorial-item">
          <h3>How to Make Coffee on a Hike</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/niclIE6AgN4"
            frameborder="0"
            allowfullscreen
          />
          <ol>
            <li>
              Choose a lightweight, portable coffee maker and coffee grounds
            </li>
            <li>Boil water using a stove or over a campfire</li>
            <li>Assemble the coffee maker and place it over a cup</li>
            <li>Add the coffee grounds and hot water</li>
            <li>Stir and let the coffee brew for a few minutes</li>
            <li>Remove the coffee maker and enjoy your coffee</li>
            <li>Clean up the coffee maker and pack out all waste</li>
          </ol>
        </div>

        <div class="tutorial-item">
          <h3>How to Make a Campfire</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0O3Bj8JFcTc"
            frameborder="0"
            allowfullscreen
          />
          <ol>
            <li>Gather firewood</li>
            <li>Clear an area for the fire</li>
            <li>Build a fire pit</li>
            <li>Create a tinder nest</li>
            <li>Light the fire</li>
            <li>Add larger sticks and logs as the fire grows</li>
            <li>Put out the fire completely before leaving the site</li>
          </ol>
        </div>

        <div class="tutorial-item">
          <h3>How to Set Up a Tent</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ha43JNTtus4"
            frameborder="0"
            allowfullscreen
          />
          <ol>
            <li>Choose a level, dry spot for the tent</li>
            <li>Lay out the tent and stake it down</li>
            <li>Assemble the tent poles and insert them into the tent</li>
            <li>Attach the rainfly if needed</li>
            <li>Secure guy lines if necessary</li>
            <li>Test the zippers and seams for leaks</li>
          </ol>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  main {
    position: relative;
    top: 150px;
    width: 100%;
    padding: 0;
    margin-bottom: 8rem;
  }

  .tutorials-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .tutorial-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .tutorial-item {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
    flex-direction: column;
  }

  h2,
  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }

  ol {
    margin-top: 2rem;
  }

  iframe {
    display: block;
    margin: 0 auto;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    .tutorials-container {
      max-width: 600px;
    }
    iframe {
      width: 100%;
    }
  }

  @media screen and (max-width: 400px) {
    .tutorials-container {
      max-width: 350px;
    }
  }
</style>
