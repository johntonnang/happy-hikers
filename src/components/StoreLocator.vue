<script>
  export default {
    data() {
      return {
        searchQuery: '',
        map: null,
        markers: [],
        infoWindow: null
      }
    },
    mounted() {
      this.initMap(), this.addMarker()
    },
    methods: {
      initMap() {
        // Initialize the map
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 57.7089, lng: 11.9746 },
          zoom: 13
        })

        // Create an info window
        this.infoWindow = new google.maps.InfoWindow()

        // Add event listener to search query input
        this.$watch('searchQuery', () => {
          this.searchStores()
        })
      },
      addMarker() {
        const marker = new google.maps.Marker({
          position: { lat: 57.6989, lng: 11.9746 },
          map: this.map,
          title: 'Happy Hikers'
        })

        const marker2 = new google.maps.Marker({
          position: { lat: 57.72, lng: 11.9646 },
          map: this.map,
          title: 'Happy Hikers'
        })

        const marker3 = new google.maps.Marker({
          position: { lat: 57.7123, lng: 12.01 },
          map: this.map,
          title: 'Happy Hikers'
        })

        this.markers.push(marker) // Add your marker to the markers array
        this.markers.push(marker2)
        this.markers.push(marker3)
      },
      searchStores() {
        // Clear existing markers
        this.markers.forEach((marker) => {
          marker.setMap(null)
        })
        this.markers = []

        // Use Geocoding API to get latitude and longitude for search query
        const geocoder = new google.maps.Geocoder()
        geocoder.geocode({ address: this.searchQuery }, (results, status) => {
          if (status === 'OK') {
            const location = results[0].geometry.location

            // Center map on search query
            this.map.setCenter(location)

            // Search for nearby stores using Places API
            const service = new google.maps.places.PlacesService(this.map)
            service.nearbySearch(
              {
                location: location,
                radius: 10000,
                type: ['store']
              },
              (results, status) => {
                if (status === 'OK') {
                  // Add markers for each store found
                  results.forEach((result) => {
                    const marker = new google.maps.Marker({
                      position: result.geometry.location,
                      map: this.map
                    })

                    // Add click event listener to marker to show info window
                    marker.addListener('click', () => {
                      this.infoWindow.setContent(result.name)
                      this.infoWindow.open(this.map, marker)
                    })

                    this.markers.push(marker)
                  })

                  // Create a new marker for your store
                  const marker = new google.maps.Marker({
                    position: { lat: 57.7089, lng: 11.9746 },
                    map: this.map,
                    title: 'My Store'
                  })

                  this.markers.push(marker) // Add your store's marker to the markers array
                }
              }
            )
          } else {
            console.log(
              'Geocode was not successful for the following reason: ' + status
            )
          }
        })
      }
    }
  }
</script>

<template>
  <main>
    <div class="map-container">
      <input
        class="map-search"
        type="text"
        placeholder="Enter a location"
        v-model="searchQuery"
      />
      <div id="map" />
    </div>
  </main>
</template>

<style scoped>
  main {
    top: 100px;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .map-container {
    margin: 1rem;
  }

  .map-search {
    border-radius: 5px;
    border: 1px solid black;
    padding: 0.3rem;
    margin: 1rem;
  }

  #map {
    height: 400px;

    width: 100%;
    border-radius: 5px;
  }
</style>
