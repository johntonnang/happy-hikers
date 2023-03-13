<!-- https://about.lindex.com/sv/press/nyheter-och-pressmeddelanden/ -->

<!-- Kanskje nye produkter, kampanjer og rabatter? Eller tips og råd -->
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      toggleWater() {
        const waterBottleTxt = document.getElementById('Water-bottles-long')
        const waterBtn = document.getElementById('water-button')

        if (waterBottleTxt.style.display === 'none') {
          waterBottleTxt.style.display = 'block'
          waterBtn.innerText = 'Read less'
        } else {
          waterBottleTxt.style.display = 'none'
          waterBtn.innerText = 'Read more'
        }
      },
      toggleCooking() {
        const cookingTxt = document.getElementById('Cooking-outdoor-long')
        const cookingBtn = document.getElementById('cooking-button')

        if (cookingTxt.style.display === 'none') {
          cookingTxt.style.display = 'block'
          cookingBtn.innerText = 'Read less'
        } else {
          cookingTxt.style.display = 'none'
          cookingBtn.innerText = 'Read more'
        }
      },
      toggleHammock() {
        const hammockTxt = document.getElementById('Hammock-long')
        const hammockBtn = document.getElementById('hammock-button')

        if (hammockTxt.style.display === 'none') {
          hammockTxt.style.display = 'block'
          hammockBtn.innerText = 'Read less'
        } else {
          hammockTxt.style.display = 'none'
          hammockBtn.innerText = 'Read more'
        }
      },
      toggleFishing() {
        const fishingTxt = document.getElementById('Fishing-gear-long')
        const fishingBtn = document.getElementById('fishing-button')

        if (fishingTxt.style.display === 'none') {
          fishingTxt.style.display = 'block'
          fishingBtn.innerText = 'Read less'
        } else {
          fishingTxt.style.display = 'none'
          fishingBtn.innerText = 'Read more'
        }
      },
      toggleCompetition() {
        const competitionTxt = document.getElementById('Competition-long')
        const competitionBtn = document.getElementById('competition-button')

        if (competitionTxt.style.display === 'none') {
          competitionTxt.style.display = 'block'
          competitionBtn.innerText = 'Read less'
        } else {
          competitionTxt.style.display = 'none'
          competitionBtn.innerText = 'Read more'
        }
      }
    }
  }
</script>

<template>
  <div class="container">
    <div id="align-header-txt"><h1>Newsletter</h1></div>

    <div class="cards-div">
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1616170958305-bc56b25bc566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div id="align-txt-button-Water">
          <h5 class="card-header-txt">Water bottles</h5>
          <p>Releasing soon!</p>

          <p id="Water-bottles-long" style="display: none">
            Attention all Happy Hikers! Get ready to quench your thirst in style
            with our brand new water bottles! These aren't just any ordinary
            water bottles - they're the latest and greatest in hydration
            innovation. With our new water bottles, you can finally say goodbye
            to those pesky leaks and spills. We've even tested them on the
            toughest of trails, and they've survived everything from rocky
            terrain to encounters with curious wildlife (we don't recommend
            testing this feature yourself, though). But wait, there's more! Our
            water bottles are not only functional, they're fashionable too.
            You'll be the envy of all your hiking buddies with our trendy
            designs and eye-catching colors. And if you're feeling extra
            adventurous, we even have a limited edition "camo" water bottle -
            perfect for blending in with the wilderness. So don't delay, order
            your Happy Hikers water bottle today! Because let's face it, nobody
            wants to be caught on the trails without a trusty water source.
            Plus, with our new bottles, you'll have a reason to stop and take a
            sip every few minutes, just to show off your cool new accessory.
            Happy hiking, and cheers to hydration! Regenerate response
          </p>
          <div class="align-btn-date">
            <button
              id="water-button"
              class="card-button-read-more"
              @click="toggleWater()"
            >
              Read more
            </button>
            <div class="align-dates">
              <p style="font-size: 15px">2023-03-13</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1530543080725-3bb810c45165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div id="align-txt-button-Cooking">
          <h5 class="card-header-txt">Cooking outdoor</h5>
          <p>Amazing outdoor dinners</p>

          <div id="Cooking-outdoor-long" style="display: none">
            <p>
              Sure, here's a funny text about cooking gourmet dinner outdoors
              while hiking, along with some recommendations for Happy Hikers:
              Attention all Happy Hikers! Are you tired of bland trail mix and
              boring energy bars on your hikes? Do you crave something more
              gourmet to fuel your adventures? Well, we have the solution for
              you: cooking a gourmet dinner outdoors while hiking! Yes, you
              heard us right - with the right tools and a little bit of
              creativity, you can cook up a delicious, restaurant-quality meal
              right on the trail. Imagine digging into a steaming plate of
              spaghetti carbonara or enjoying a juicy grilled steak with a side
              of roasted veggies, all while taking in the beauty of nature. Of
              course, cooking outdoors requires some planning and preparation.
              Here are a few recommendations for turning your hiking trip into a
              gourmet feast:
            </p>
            <ol style="font-size: 20px">
              <li>
                Invest in a portable stove and cookware: A good quality stove
                and cookware will make cooking outdoors much easier and more
                enjoyable. Look for lightweight and compact options that won't
                take up too much space in your backpack.
              </li>
              <li>
                Plan your menu ahead of time: Decide on your menu before you hit
                the trail so you can make sure you have all the necessary
                ingredients and equipment. Consider prepping some ingredients at
                home to save time and make cooking on the trail easier.
              </li>
              <li>
                Pack plenty of seasoning and spices: Just because you're in the
                great outdoors doesn't mean you have to sacrifice flavor. Pack
                plenty of seasoning and spices to add some extra oomph to your
                dishes.
              </li>
              <li>
                Don't forget the wine: What's a gourmet meal without a good
                bottle of wine? Opt for a lightweight and shatterproof option
                like canned wine or a plastic wine bottle.
              </li>
            </ol>

            <p>
              So there you have it, Happy Hikers! With these tips and a little
              bit of creativity, you can elevate your hiking meals to a whole
              new level. Just remember to pack out all of your trash and leave
              no trace. Happy hiking and bon appétit!
            </p>
          </div>
          <div class="align-btn-date">
            <button
              id="cooking-button"
              class="card-button-read-more"
              @click="toggleCooking()"
            >
              Read more
            </button>
            <div class="align-dates">
              <p style="font-size: 15px">2022-12-02</p>
            </div>
          </div>
        </div>
      </div>

      <!--  -->

      <div class="cards-div">
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1598909820593-c970004196f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div id="align-txt-button-fishing">
            <h5 class="card-header-txt">Fishing gear - for beginners</h5>
            <p>Tips and tricks to catch fish</p>

            <div id="Fishing-gear-long" style="display: none">
              <p>
                Attention all Happy Hikers! Are you ready to add some excitement
                to your outdoor adventures? Do you want to experience the thrill
                of the catch while surrounded by the beauty of nature? Well,
                then it's time to grab your fishing gear and head to the nearest
                river or lake! Fishing is a great way to connect with nature and
                challenge yourself in new ways. Plus, there's nothing quite like
                the feeling of reeling in a big one and showing off your catch
                to your hiking buddies (even if it's just a small trout). But
                before you head out on your next fishing expedition, here are a
                few recommendations to ensure you have the best experience
                possible:
              </p>
              <ol style="font-size: 20px">
                <li>
                  Invest in quality gear: A good quality fishing rod, reel, and
                  line will make all the difference in your fishing experience.
                  Look for lightweight and durable options that are easy to pack
                  and transport.
                </li>
                <li>
                  Research the best fishing spots: Do your research ahead of
                  time to find the best fishing spots in the area. Talk to
                  locals or check online forums to get insider tips on where the
                  fish are biting.
                </li>
                <li>
                  Pack the essentials: Don't forget to pack the essentials, like
                  sunscreen, bug spray, and a hat. And of course, make sure to
                  bring snacks and drinks to keep your energy up during long
                  fishing sessions.
                </li>
                <li>
                  Don't be afraid to get creative: Fishing is all about
                  experimentation, so don't be afraid to try new lures or
                  techniques. Who knows, you might just discover a new secret
                  weapon for catching that elusive trout.
                </li>
              </ol>
              <p>
                So what are you waiting for, Happy Hikers? Grab your fishing
                gear and head out into the great outdoors for a day of fishing
                fun. And who knows, you might even catch a big enough fish to
                cook up a gourmet dinner (check out our previous recommendations
                for cooking gourmet meals outdoors while hiking). Happy fishing!
              </p>
            </div>
            <div class="align-btn-date">
              <button
                id="fishing-button"
                class="card-button-read-more"
                @click="toggleFishing()"
              >
                Read more
              </button>
              <div class="align-dates">
                <p style="font-size: 15px">2022-10-12</p>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1599533680895-745e30418674?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div id="align-txt-button-competition">
            <h5 class="card-header-txt">Competition</h5>
            <p>Win a unique hiking experience in beautiful Austria</p>

            <p id="Competition-long" style="display: none">
              Attention all Happy Hikers! Are you ready for the ultimate hiking
              adventure? Do you dream of exploring the majestic mountains of
              Austria with your fellow nature enthusiasts? Well, then it's time
              to enter our latest competition and win the hiking experience of a
              lifetime! That's right, Happy Hikers is offering one lucky winner
              the chance to embark on a unique hiking adventure in the stunning
              Austrian Alps. Picture yourself hiking through pristine valleys,
              climbing snow-capped peaks, and taking in the breathtaking views
              from the top of the world. But wait, there's more! This is no
              ordinary hiking experience - we're talking about a truly unique
              adventure that only Happy Hikers could offer. Get ready to hike
              with a group of friendly mountain goats, learn to yodel from a
              local expert, and enjoy a gourmet picnic lunch featuring the
              finest Austrian delicacies (think schnitzel, strudel, and lots of
              beer). And for those who are worried about their hiking abilities,
              fear not! Our experienced guides are ready to lead you through the
              most breathtaking routes in the Austrian Alps, while providing
              plenty of snacks and encouragement along the way. So what are you
              waiting for, Happy Hikers? Enter our competition today and get
              ready to experience the best that Austria has to offer. And who
              knows, you might just discover a new love for hiking, yodeling,
              and schnitzel. Happy trails and good luck!
            </p>
            <div class="align-btn-date">
              <button
                id="competition-button"
                class="card-button-read-more"
                @click="toggleCompetition()"
              >
                Read more
              </button>
              <div class="align-dates">
                <p style="font-size: 15px">2022-06-02</p>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
      <!-- </div> -->
      <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped>
  li {
    list-style-type: decimal;
    margin-left: 10%;
    margin-right: 10%;
    color: #5c5959;
  }
  .container {
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #align-header-txt {
    text-align: center;
  }

  /* CARD */

  h5,
  h1,
  p {
    text-align: center;
    color: #5c5959;
  }

  .card p {
    font-size: 20px;
  }

  .card img {
    max-height: 100%;
    max-width: 100%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  #align-txt-button-Water {
    margin-right: 10%;
    text-align: center;
    margin-top: 3%;
    margin-left: 10%;
  }

  #align-txt-button-Cooking {
    margin-right: 10%;
    text-align: center;
    margin-top: 3%;
    margin-left: 10%;
  }

  #align-txt-button-fishing {
    margin-right: 10%;
    text-align: center;
    margin-top: 3%;
    margin-left: 10%;
  }

  #align-txt-button-competition {
    margin-right: 10%;
    text-align: center;
    margin-top: 3%;
    margin-left: 10%;
  }

  .card {
    transition: 0.3s;
    border-style: none;
    display: flex;
    margin-bottom: 5%;
  }

  .card-header-txt {
    font-weight: bold;
    font-size: 2rem;
  }

  .card h5 {
    margin-top: 10px;
  }

  button {
    background-color: white;
    color: #5c5959;
    border: none;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
  }

  .align-dates p {
    margin-top: 5%;
    /* margin-left: 90%; */
  }

  @media (min-width: 1401px) and (max-width: 1700px) {
    #align-header-txt {
      margin-top: 15%;
    }
    .align-dates p {
      margin-left: 90%;
    }
  }

  @media (min-width: 1001px) and (max-width: 1400px) {
    #align-header-txt {
      margin-top: 15%;
    }
    .align-dates p {
      margin-left: 90%;
    }
  }

  @media (min-width: 901px) and (max-width: 1000px) {
    #align-header-txt {
      margin-top: 15%;
    }
    .align-dates p {
      margin-left: 85%;
    }
  }

  @media (min-width: 701px) and (max-width: 900px) {
    #align-header-txt {
      margin-top: 15%;
    }
    .align-dates p {
      margin-left: 80%;
    }
  }

  @media (min-width: 601px) and (max-width: 700px) {
    .align-dates p {
      margin-left: 80%;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    .align-dates p {
      margin-left: 75%;
    }
  }

  @media (min-width: 429px) and (max-width: 500px) {
    #align-header-txt {
      margin-top: 15%;
    }
    .align-dates p {
      margin-left: 75%;
    }
    .card {
      transition: 0.3s;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: 360px) and (max-width: 428px) {
    #align-header-txt {
      margin-top: 15%;
    }
    .align-dates p {
      margin-left: 70%;
    }

    .card {
      transition: 0.3s;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }
</style>
