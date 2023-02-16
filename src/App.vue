<script>
  import CitiesList from './components/CitiesList.vue'
  import CounterButton from './components/CounterButton.vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      CitiesList,
      CounterButton,
      HelloWorld
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>
    </ul>
  </nav>
  <h1>Hello</h1>
  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <CounterButton />
  <main>
    <RouterView />
  </main>
</template>
