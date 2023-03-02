<template>
  <main id="container">
    <div id="newsletter">
      <h1 id="h1-news">Newsletter</h1>
      <h5>Join us</h5>
      <p>
        Do you love outdoor activities like hiking, camping, or rock climbing?
        Our online store has everything you need for your next adventure.
        Subscribe to our newsletter for the latest products, helpful tips, and
        exclusive deals. Enter your email and start receiving updates today.
      </p>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" Enter your email"
        />
        <button class="submit-btn">Submit</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
  #h1-news {
    color: rgba(2, 70, 2, 0.716);
    font-weight: bold;
  }

  h5 {
    font-weight: bold;
  }

  h5,
  p {
    color: rgb(80, 77, 77);
  }

  #newsletter {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    align-items: center;
    text-align: center;
    margin-bottom: 5%;
    border-radius: 5px;
    margin: 5%;
    padding: 30px;
    margin-left: 30%;
    margin-right: 30%;
  }

  #newsletter:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .submit-btn {
    color: black;
    background-color: white;

    border-radius: 5px;
    border: 1px solid black;
  }

  .submit-btn:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  input {
    /* border: none; */
    margin-right: 10px;
    width: 50%;
    border-radius: 5px;
    border: 1px solid rgb(179, 179, 179);
    outline: none;
  }
</style>
