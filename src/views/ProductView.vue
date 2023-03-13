<script>
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    onSnapshot,
    collection,
    doc,
    getDoc,
    updateDoc,
    // deleteDoc,
    setDoc,
    // addDoc,
    orderBy,
    query
  } from 'firebase/firestore'
  import { ref } from 'vue'

  const firebaseConfig = {
    apiKey: 'AIzaSyAGJoAN08CeHsyoibMdRQVpegwPibf1ANk',
    authDomain: 'happy-hikers-1a875.firebaseapp.com',
    projectId: 'happy-hikers-1a875',
    storageBucket: 'happy-hikers-1a875.appspot.com',
    messagingSenderId: '434497193720',
    appId: '1:434497193720:web:5893a8bd2905affdaedd0d',
    measurementId: 'G-QW50PLVBTN'
  }
  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)
  export default {
    data() {
      return {
        product: '',
        products: ref([]),
        account: null,
        accounts: null,
        similarProducts: [],
        CartText: '+  Add to cart   ',
        WishText: '+  Add to wishlist   ',
        id: this.$route.params.id,
        CartColor: 'rgba(0, 0, 0)',
        WishColor: 'rgba(0, 0, 0)',
        ChooseSize: false,
        SizeError: false,
        currentDate: '',
        cartItems: [],
        showCart: false,
        isHoveringCartPreview: false,
        totalValue: 0,
        discountActive: false,
        reviewName: '',
        reviewStars: [],
        reviewComment: '',
        allReviews: [],
        noReviews: true,
        reviewApplied: false,
        formError: false
      }
    },
    computed: {
      total() {
        if (localStorage.getItem('discountActive')) {
          return this.cartItems.reduce((x, item) => x + item.price, 0) * 0.85
        } else {
          return this.cartItems.reduce((x, item) => x + item.price, 0)
        }
      },

      filteredReviews() {
        return this.allReviews.slice(0, 3)
      }
    },

    mounted() {
      if (localStorage.getItem('discountActive')) {
        this.discountActive = true
      }
    },

    watch: {
      $route() {
        this.formError = false
        this.reviewApplied = false
        this.reviewName = ''
        this.reviewComment = ''
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === this.$route.params.id) {
            this.product = this.products[i]
          }
        }
        this.similarProducts = []
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].category === this.product.category) {
            if (this.products[i].id !== this.product.id)
              this.similarProducts.unshift(this.products[i])
          }
        }
      }
    },

    created() {
      this.renderDate()
      const latestQuery = query(collection(db, 'products'), orderBy('price'))

      onSnapshot(latestQuery, (snapshot) => {
        this.products = snapshot.docs.map((doc) => {
          return {
            id: doc.data().id,
            name: doc.data().name,
            price: doc.data().price,
            image: doc.data().img,
            description: doc.data().description,
            colors: doc.data().colors,
            category: doc.data().category,
            rating: doc.data().rating,
            ratingcount: doc.data().ratingcount,
            allreviews: doc.data().allreviews
          }
        })
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === this.$route.params.id) {
            this.product = this.products[i]
          }
        }
        this.similarProducts = []
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].category === this.product.category) {
            if (this.products[i].id !== this.product.id)
              this.similarProducts.unshift(this.products[i])
          }
        }

        this.showProducts = this.products
      })
      const kontoQuery = query(collection(db, 'konto'))
      onSnapshot(kontoQuery, (snapshot) => {
        this.accounts = snapshot.docs.map((doc) => {
          if (localStorage.getItem('email') === doc.data().email) {
            return {
              id: doc.id,
              email: doc.data().email,
              password: doc.data().password,
              name: doc.data().name,
              phone: doc.data().phone,
              registredUser: doc.data().registredUser,
              wish: doc.data().wishlist,
              cart: doc.data().cart,
              orders: doc.data().orders,
              profilePoints: doc.data().profilePoints
            }
          }
        })
        // livekonto.unsubscribe()
        // this.wish = JSON.parse(this.wish)
        this.showProducts = this.products
        for (let i = 0; i < this.accounts.length; i++) {
          if (this.accounts[i]) {
            this.account = this.accounts[i]
          }
        }
      })
      // onUnmounted(liveProducts)
      // onUnmounted(liveKonto)
    },

    methods: {
      //Älskar ChatGPT
      applyReviewOnPage() {
        if (
          this.reviewName === '' ||
          this.reviewStars.length === 0 ||
          this.reviewComment === ''
        ) {
          this.formError = true
          return
        }

        this.formError = false
        this.reviewApplied = true

        const newReview = {
          name: this.reviewName,
          stars: this.reviewStars.length,
          comment: this.reviewComment,
          date: this.currentDate
        }

        const productDoc = doc(db, 'products', this.product.id)

        getDoc(productDoc).then((doc) => {
          if (doc.exists()) {
            const allReviews = doc.data().allreviews || []

            allReviews.push(newReview)

            setDoc(productDoc, { allreviews: allReviews }, { merge: true })
          }
        })
      },

      addReviewSubmit() {
        this.productRef = doc(db, 'products', this.product.id.toString())
        if (
          this.reviewName === '' ||
          this.reviewStars.length === 0 ||
          this.reviewComment === ''
        ) {
          this.formError = true
          return
        }

        this.formError = false

        this.noReviews = false
        const newRating = this.reviewStars.length
        getDoc(this.productRef).then((doc) => {
          if (doc.exists()) {
            const currentRating = doc.data().rating || 0
            const currentRatingCount = doc.data().ratingcount || 0
            const newRatingCount = currentRatingCount + 1
            const newAverageRating =
              (currentRating * currentRatingCount + newRating) / newRatingCount
            updateDoc(this.productRef, {
              rating: newAverageRating,
              ratingcount: newRatingCount
            })
          } else {
            setDoc(this.productRef, {
              rating: newRating,
              ratingcount: 1
            })
          }
        })
      },

      toggleChecked(starIndex) {
        this.reviewStars = []
        for (let i = 1; i <= 5; i++) {
          const starIcon = document.getElementById(`star-${i}`)
          if (i <= starIndex) {
            starIcon.classList.add('checked')
            this.reviewStars.push('starIndex')
          } else {
            starIcon.classList.remove('checked')
          }
        }
      },

      renderDate() {
        const currentDate = new Date()
        const day = String(currentDate.getDate()).padStart(2, '0')
        const month = String(currentDate.getMonth() + 1).padStart(2, '0')
        const year = currentDate.getFullYear()
        this.currentDate = `${day}/${month}/${year}`
      },
      addToCart(id) {
        if (!this.ChooseSize) {
          this.SizeError = true
          return
        } else {
          this.SizeError = false
        }
        if (localStorage.getItem('email')) {
          // if (localStorage.getItem('Cart') !== null) {
          if (this.CartText === '+  Add to cart   ') {
            this.$store.commit('addToCart')
            let cart = this.account.cart
            cart.unshift({
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              image: this.product.image,
              description: this.product.description,
              category: this.product.category,
              date: this.currentDate
            })
            setDoc(doc(db, 'konto', this.account.id), {
              id: this.account.id,
              email: this.account.email,
              password: this.account.password,
              name: this.account.name,
              phone: this.account.phone,
              registredUser: this.account.registredUser,
              wishlist: this.account.wish,
              cart: cart,
              orders: this.account.orders,
              profilePoints: this.account.profilePoints
            })
            this.CartColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.CartText = '✓'), 350)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0)'), 350)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.CartText = 'Remove from Cart'), 3350)
          } else if (this.CartText === 'Remove from Cart') {
            this.$store.commit('removeCart')
            let cart = this.account.cart

            let i = 0
            for (let product of cart) {
              if (product.id === id) {
                cart.splice(i, 1)
                console.log('1')
                setDoc(doc(db, 'konto', this.account.id), {
                  id: this.account.id,
                  email: this.account.email,
                  password: this.account.password,
                  name: this.account.name,
                  phone: this.account.phone,
                  registredUser: this.account.registredUser,
                  wishlist: this.account.wish,
                  cart: cart,
                  orders: this.account.orders,
                  profilePoints: this.account.profilePoints
                })
              }
              i++
            }
            this.CartColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.CartText = '✓'), 350)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0)'), 350)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.CartText = '+  Add to cart   '), 3350)
          }
          this.showCartPreview()
          this.cartItems = this.account.cart
          this.totalValue = this.cartItems.reduce(
            (x, item) => x + item.price,
            0
          )
        } else {
          this.$router.push('/Profile')
        }
      },

      showCartPreview() {
        this.showCart = true

        setTimeout(() => {
          this.showCart = false
        }, 2500)
      },
      closeCartPreview() {
        this.showCart = false
        this.isHoveringCartPreview = false
      },

      removeItem(index) {
        this.$store.commit('removeCart')
        this.cartItems.splice(index, 1)
        setDoc(doc(db, 'konto', this.account.id), {
          id: this.account.id,
          email: this.account.email,
          password: this.account.password,
          name: this.account.name,
          phone: this.account.phone,
          registredUser: this.account.registredUser,
          wishlist: this.account.wish,
          cart: this.cartItems,
          orders: this.account.orders,
          profilePoints: this.account.profilePoints
        })
      },
      openProduct(id) {
        this.WishText = '+  Add to wishlist   '
        this.CartText = '+  Add to cart   '
        this.$router.push({
          path: '/ProductView/' + id,
          replace: true
        })
      },
      addToWish(id) {
        if (localStorage.getItem('email')) {
          // Om en produkt ska läggas till från wishlist så körs detta
          if (this.WishText === '+  Add to wishlist   ') {
            this.$store.commit('addToWish')
            let wish = this.account.wish

            wish.unshift({
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              image: this.product.image,
              description: this.product.description
            })
            setDoc(doc(db, 'konto', this.account.id), {
              id: this.account.id,
              email: this.account.email,
              password: this.account.password,
              name: this.account.name,
              phone: this.account.phone,
              registredUser: this.account.registredUser,
              wishlist: wish,
              cart: this.account.cart,
              orders: this.account.orders,
              profilePoints: this.account.profilePoints
            })

            this.WishColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.WishText = '✓'), 350)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0)'), 350)

            setTimeout(() => (this.WishColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.WishText = 'Remove from Wishlist'), 3350)
            // Om en produkt ska tas bort från wishlist så körs detta
          } else if (this.WishText === 'Remove from Wishlist') {
            this.$store.commit('removeWish')
            let wish = this.account.wish
            let i = 0
            for (let product of wish) {
              console.log(1)
              if (product.id === id) {
                console.log(2)
                wish.splice(i, 1)
                setDoc(doc(db, 'konto', this.account.id), {
                  id: this.account.id,
                  email: this.account.email,
                  password: this.account.password,
                  name: this.account.name,
                  phone: this.account.phone,
                  registredUser: this.account.registredUser,
                  wishlist: wish,
                  cart: this.account.cart,
                  orders: this.account.orders,
                  profilePoints: this.account.profilePoints
                })
              }
              i++
            }
            this.WishColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.WishText = '✓'), 350)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0)'), 350)

            setTimeout(() => (this.WishColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.WishText = '+  Add to wishlist   '), 3350)
          }
        } else {
          this.$router.push('/Profile')
        }
        // } else {
        //   let wish = null
        //   if (this.WishText === '+  Add to wishlist   ') {
        //     console.log('hej')
        //     console.log('Wish 3')
        //     wish = [
        //       {
        //         id: this.product.id,
        //         name: this.product.name,
        //         price: this.product.price,
        //         image: this.product.img,
        //         description: this.product.description
        //       }
        //     ]
        //     localStorage.setItem('Wish', JSON.stringify(wish))
        //     this.WishColor = 'rgba(0,0,0,0)'
        //     setTimeout(() => (this.WishText = '✓'), 350)
        //     setTimeout(() => (this.WishColor = 'rgba(0,0,0)'), 350)

        //     setTimeout(() => (this.WishColor = 'rgba(0,0,0,0)'), 3000)
        //     setTimeout(() => (this.WishColor = 'rgba(0,0,0,1)'), 3350)
        //     setTimeout(() => (this.WishText = '+  Add to wishlist   '), 3350)
        //   }
        // }
      },

      sizeSelected() {
        this.ChooseSize = true
      }
    }
  }
</script>

<template>
  <main>
    <div
      v-if="showCart || isHoveringCartPreview"
      class="cart-preview"
      @mouseover="isHoveringCartPreview = true"
      @mouseleave="showCartPreview(), (isHoveringCartPreview = false)"
    >
      <h3>Your shopping cart</h3>
      <div class="close-button" @click="closeCartPreview()">
        <font-awesome-icon icon="fa-solid fa-x" />
      </div>
      <div class="cartItems" v-for="(item, index) in cartItems" :key="index">
        <div class="itemRow">
          <div>
            <img class="productImg" :src="item.image" :alt="item.name" />
          </div>
          <div class="productInfo">
            <span class="name">{{ item.name }}</span>
            <img
              class="trashImg"
              @click="removeItem(index)"
              src="/assets/trash-can-solid.svg"
              alt="trash can"
              width="20"
            />
            <span class="price">{{ item.price }} :- </span>
          </div>
        </div>
      </div>
      <div class="total">
        <p style="margin-right: 10px">Total:</p>
        <p id="discount-active" v-if="discountActive">{{ total }} :-</p>
        <p v-else>{{ total }} :-</p>
        <p v-if="discountActive" class="total-discount">{{ total }} :-</p>
      </div>
      <p id="member-active-text" v-if="discountActive">
        Membership discount of 15% is active.
      </p>
    </div>
    <p id="page-direction">
      <router-link class="home-direction" to="/">Home</router-link> /
      <router-link class="home-direction" to="/ProductCatalog"
        >Products</router-link
      >
      /
      <router-link
        class="home-direction"
        :to="'/ProductCatalog/' + product.category"
        >{{ product.category }}</router-link
      >
    </p>
    <section>
      <img :src="product.image" alt="Img of the product" class="product-img" />
      <div class="product-information">
        <h2 class="product-name">{{ product.name }}</h2>
        <h2 class="product-price">{{ product.price }} :-</h2>
        <p class="product-description">
          {{ product.description }}
        </p>
        <div class="review-rating">
          <font-awesome-icon
            :class="{ checked: product.rating >= 1 }"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            :class="{ checked: product.rating >= 2 }"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            :class="{ checked: product.rating >= 3 }"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            :class="{ checked: product.rating >= 4 }"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            :class="{ checked: product.rating >= 5 }"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <p>({{ product.ratingcount }})</p>
        </div>

        <select
          v-if="product.category === 'Shoes'"
          class="product-size"
          type="option"
          @change="sizeSelected"
        >
          <option value="" disabled selected hidden>Choose a size</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
        </select>
        <select
          v-else-if="product.category === 'Backpack'"
          class="product-size"
          type="option"
          @change="sizeSelected"
        >
          <option value="" disabled selected hidden>Choose a size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
        <select
          v-else
          class="product-size"
          type="option"
          @change="sizeSelected"
        >
          <option value="" disabled selected hidden>Choose a size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXl">XXL</option>
        </select>
        <p v-if="this.SizeError" style="color: red">
          You need to choose a size.
        </p>
        <div class="product-btns">
          <input
            @click="addToCart(product.id)"
            class="product-btn"
            type="button"
            :value="CartText"
            :style="{ color: this.CartColor }"
          />
          <input
            @click="addToWish(product.id)"
            class="product-btn product-wishlist"
            type="button"
            :value="WishText"
            :style="{ color: this.WishColor }"
          />
        </div>
        <div class="product-return-container">
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text"><b>30</b> day price guarantee</p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text">
              <b>Free</b> return & right of exchange
            </p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text">
              <b>Free shipping</b> on orders over 399:-
            </p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text"><b>365</b> days open purchase</p>
          </div>
        </div>
        <section id="review-section">
          <div>
            <div id="review-container">
              <h2>Reviews</h2>
              <p v-if="!product.allreviews">No reviews.</p>
              <div
                v-else
                class="review-container-box"
                :key="review"
                v-for="(review, index) in product.allreviews.slice(0, 3)"
              >
                <div class="review-container-header">
                  <h4>{{ product.allreviews[index].name }},</h4>
                  <div style="margin-top: 2px">
                    <font-awesome-icon
                      :class="{
                        checked: product.allreviews[index].stars > 0
                      }"
                      class="font-star"
                      icon="fa-solid fa-star"
                    />
                    <font-awesome-icon
                      :class="{
                        checked: product.allreviews[index].stars > 1
                      }"
                      class="font-star"
                      icon="fa-solid fa-star"
                    />
                    <font-awesome-icon
                      :class="{
                        checked: product.allreviews[index].stars > 2
                      }"
                      class="font-star"
                      icon="fa-solid fa-star"
                    />
                    <font-awesome-icon
                      :class="{
                        checked: product.allreviews[index].stars > 3
                      }"
                      class="font-star"
                      icon="fa-solid fa-star"
                    />
                    <font-awesome-icon
                      :class="{
                        checked: product.allreviews[index].stars > 4
                      }"
                      class="font-star"
                      icon="fa-solid fa-star"
                    />
                  </div>
                </div>
                <div id="review-date-container">
                  <p>"{{ product.allreviews[index].comment }}"</p>
                  <p id="date-text">{{ product.allreviews[index].date }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <h2 id="review-applied-text" v-if="reviewApplied">
      Thank you for your review! 🌟
    </h2>
    <section v-else id="review-counter">
      <label for="name-input" /> Name *
      <input
        id="input-field-review"
        v-model="reviewName"
        placeholder="e.g John Doe.."
        name="name-input"
      />
      <label>Rating:</label>
      <div class="review-rating second-star-container">
        <font-awesome-icon
          id="star-1"
          class="font-star"
          icon="fa-solid fa-star"
          @click="toggleChecked(1)"
        />
        <font-awesome-icon
          id="star-2"
          class="font-star"
          icon="fa-solid fa-star"
          @click="toggleChecked(2)"
        />
        <font-awesome-icon
          id="star-3"
          class="font-star"
          icon="fa-solid fa-star"
          @click="toggleChecked(3)"
        />
        <font-awesome-icon
          id="star-4"
          class="font-star"
          icon="fa-solid fa-star"
          @click="toggleChecked(4)"
        />
        <font-awesome-icon
          id="star-5"
          class="font-star"
          icon="fa-solid fa-star"
          @click="toggleChecked(5)"
        />
      </div>
      <label for="textarea-input" /> Add text *
      <textarea
        id="textarea-review"
        v-model="reviewComment"
        name="textarea-input"
        placeholder="Review text.."
      />
      <button
        id="apply-review-btn"
        @click="addReviewSubmit(), applyReviewOnPage()"
      >
        Add Review
      </button>
      <p v-if="formError">Please fill out all the required fields.</p>
    </section>

    <section class="otherInformation">
      <h2>Similar products</h2>
      <!-- <div class="similairProducts"> -->
      <div class="product-container">
        <div
          :key="similarProduct.id"
          v-for="similarProduct in similarProducts"
          class="product-box"
          @click="openProduct(similarProduct.id)"
        >
          <img id="bg-image" alt="" :src="similarProduct.image" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span
                  v-for="color in similarProduct.colors"
                  :key="color"
                  class="color-circle-one"
                  :style="{ backgroundColor: color }"
                />
              </div>
              <div class="review-rating-similar">
                <font-awesome-icon
                  :class="{ checked: similarProduct.rating >= 1 }"
                  class="font-star-similar"
                  icon="fa-solid fa-star"
                />
                <font-awesome-icon
                  :class="{ checked: similarProduct.rating >= 2 }"
                  class="font-star-similar"
                  icon="fa-solid fa-star"
                />
                <font-awesome-icon
                  :class="{ checked: similarProduct.rating >= 3 }"
                  class="font-star-similar"
                  icon="fa-solid fa-star"
                />
                <font-awesome-icon
                  :class="{ checked: similarProduct.rating >= 4 }"
                  class="font-star-similar"
                  icon="fa-solid fa-star"
                />
                <font-awesome-icon
                  :class="{ checked: similarProduct.rating >= 5 }"
                  class="font-star-similar"
                  icon="fa-solid fa-star"
                />
                <p>({{ similarProduct.ratingcount }})</p>
              </div>
            </div>
            <h3 id="similar-heading">{{ similarProduct.name }}</h3>
            <p style="margin-top: 2px">{{ similarProduct.category }}</p>
            <h2>{{ similarProduct.price }}:-</h2>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </section>
  </main>
</template>

<style scoped>
  LoginProfile {
    position: absolute;
  }
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  .cart-preview {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    width: 20rem;
    background-color: white;
    /* border: 1px solid black; */
    border: 1px solid rgb(179, 179, 179);
    padding: 1rem;
    z-index: 999;
    max-height: 40rem;
    overflow-y: auto;
    border-radius: 5px;
  }
  .trashImg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 0.75rem;
  }

  .trashImg:hover {
    cursor: pointer;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  .itemRow {
    display: flex;
    flex-direction: row;
    max-width: 90%;
    position: relative;
    margin-top: 1rem;
    box-shadow: 0px 46px 130px rgba(0, 25, 64, 0.142);
  }
  .total {
    font-size: 1.5rem;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin: 2rem 2rem 2rem 0rem;
  }

  .total-discount {
    color: rgb(245, 8, 8);
    margin-left: 10px;
  }

  #discount-active {
    text-decoration: line-through;
  }

  #member-active-text {
    color: rgb(228, 13, 13);
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin: 2rem 2rem 0rem 2rem;
  }
  .productImg {
    max-width: 100px;
    max-height: 100px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: all 0.4;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  main {
    position: relative;
    top: 100px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
  .product-img {
    width: 50%;
    object-fit: cover;
  }
  section {
    display: flex;
  }
  .product-information {
    margin-left: 2rem;
    width: 50%;
  }
  .product-name {
    font-size: 2em;
  }
  .product-price {
    font-weight: 700;
  }
  .product-size {
    /* background-color: rgba(255, 255, 255, 0); */
    background-color: #e6e6e6;
    /* border: 1px solid; */
    border: 1px solid rgb(179, 179, 179);
    border-radius: 5px;
    padding: 0.7rem;
    transition: all 0.35s;
    appearance: none;
    outline: none;
  }
  .product-size:hover {
    /* background-color: rgb(44, 44, 44); */
    background-color: #d6d6d6;
    color: #000;
  }
  .color-circle-one,
  .color-circle-two,
  .color-circle-three,
  .color-circle-four {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50px;
    margin-right: 8px;
  }
  .product-btn {
    width: 45%;
    margin-right: 5%;
    margin-top: 20px;
    /* padding: 1rem; */
    height: 50px;
    background-color: #579d5d;
    border-radius: 3px;
    border: 0px solid;
    font-weight: 400;
    transition: all 0.35s;
  }
  .product-btn:hover {
    background-color: #45804a;
    /* color: #579d5d; */
  }
  .product-wishlist {
    background-color: #b1ea38;
  }
  .product-wishlist:hover {
    background-color: #8ab72a;
    /* color: #b1ea38; */
  }
  .product-return {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .product-return-text {
    font-weight: lighter;
    margin: 0px;
    margin-left: 5px;
    line-height: 1;
  }

  #review-section {
    width: 100%;
    display: block;
  }

  #review-container {
    border-top: 1px solid rgb(80, 80, 80);
    padding: 10px 0px;
    width: 100%;
    margin-top: 30px;
  }

  #review-container h2 {
    text-decoration: underline;
  }

  .review-container-box {
    box-shadow: 1px 3px 8px rgb(87, 87, 87);
    width: 70%;
    margin: 20px 0px;
    padding: 10px 15px;
  }

  .review-container-header {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }

  .review-container-box p {
    font-style: italic;
  }

  #review-counter {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 15px 0px;
    border-bottom: 1px solid black;
  }

  #review-counter p {
    margin-top: -15px;
    color: red;
  }

  #input-field-review {
    width: 50%;
    padding: 5px 5px;
    margin: 2px 0px 15px 0px;
  }

  .review-rating {
    width: 30%;
    display: flex;
  }

  .review-rating p {
    margin-left: 5px;
    margin-top: -4px;
    padding-top: 0px;
  }

  #date-text {
    position: relative;
    top: 15px;
    display: flex;
    justify-content: end;
    font-size: 0.8rem;
    color: #000000;
  }
  .second-star-container {
    margin-bottom: 10px;
  }

  #textarea-review {
    margin-bottom: 15px;
    margin-top: 2px;
    width: 75%;
    height: 100px;
  }

  #apply-review-btn {
    width: 100px;
    border: none;
    box-shadow: 0px 0px 6px black;
    background-color: #579d5d;
    padding: 5px;
    margin-bottom: 20px;
    color: rgb(245, 244, 244);
  }

  #apply-review-btn:hover {
    background-color: #45804a;
  }

  .product-return-container {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .product-container {
    display: flex;
    flex-wrap: wrap;
  }
  .product-box {
    margin: 0px 50px 25px 0px;
    font-size: 1.1rem;
    transition: all 0.2s;
  }
  .product-box:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
    border-radius: 5px;
    cursor: pointer;
  }
  .product-box img {
    max-width: 300px;
    max-height: 350px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: all 0.4;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .align-content-mobile {
    padding: 5px;
  }
  .product-title-rating {
    display: flex;
    align-items: center;
  }
  .product-title-rating img {
    margin: 4px 0px 0px auto;
    width: 80px;
    height: 20px;
  }
  .font-star {
    color: grey;
    cursor: pointer;
  }

  .checked {
    color: orange;
  }
  .product-box h2 {
    font-size: 2.2rem;
    margin-bottom: 0px;
  }
  .otherInformation {
    display: grid;
  }

  .home-direction {
    text-decoration: none;
    color: #424242;
    transition: all 0.35s ease-in-out;
  }
  .home-direction:hover {
    opacity: 0.7;
  }

  #page-direction {
    font-size: 1.1rem;
    font-weight: 600;
    color: #424242;
  }
  #similar-heading {
    display: flex;
    justify-content: left;
    margin: 10px -2px 0px -2px;
  }
  .font-star-similar {
    color: grey;
    cursor: pointer;
    width: 15px;
    height: 10px;
  }
  .checked {
    color: orange;
  }

  .review-rating-similar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    height: 20px;
  }

  .review-rating-similar p {
    margin-top: 15px;
    margin-left: 3px;
  }

  #review-applied-text {
    padding: 50px 0px;
    width: 50%;
    border-bottom: 1px solid black;
  }

  @media (max-width: 900px) {
    section {
      display: grid;
    }
    main {
      width: 95%;
    }
    .product-information {
      margin-top: 20px;
      width: 100%;
      margin-left: 0px;
    }
    .product-img {
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    #textarea-review {
      width: 100%;
    }
  }
  @media (max-width: 560px) {
    .review-container-box {
      width: 90%;
    }
    #review-counter {
      margin-top: 0px;
      width: 75%;
    }
    #input-field-review {
      width: 100%;
    }
    #textarea-review {
      width: 100%;
    }
  }
</style>
