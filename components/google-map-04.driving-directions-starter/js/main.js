/* globals google */
const places = {
  artScienceMuseum: '6 Bayfront Ave, Singapore 018974',
  gardensByTheBay: '18 Marina Gardens Dr, Singapore 018953',
  littleIndia: 'Little India, Singapore',
  sentosa: 'Sentosa, Singapore',
  singaporeZoo: '80 Mandai Lake Rd, Singapore 729826'
}

// ========================
// Functions
// ========================
/**
 * Fetch Google Maps API (JSONP).
 */
const fetchGoogleMapsApi = _ => {
  // Please change this to use your own API key!
  const apiKey = 'AIzaSyBOSppjMrbl5YQAUla6O9WNAL1w2zeWtLc'
  const script = document.createElement('script')
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMaps`
  script.addEventListener('error', console.error)

  document.body.appendChild(script)
  document.body.removeChild(script)
}

/**
 * Get directions from Google Map's Directions service
 * @param {Object} request - Google Directions API request object
 */
const getDirections = request => {
  return new Promise((resolve, reject) => {
    const directionsService = new google.maps.DirectionsService()

    directionsService.route(request, result => {
      if (result.status === 'OK') return resolve(result)
      return reject(result)
    })
  })
}

/**
 * Initializes Google Map
 * Used in findGoogleMapsApi as a callback
 */
/* eslint-disable */
function initGoogleMaps () {
/* eslint-enable */
  const mapDiv = document.querySelector('#map')
  const map = new google.maps.Map(mapDiv, {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 13
  })

  const request = {
    origin: places.singaporeZoo,
    destination: places.sentosa,
    travelMode: 'DRIVING'
  }

  getDirections(request)
    .then(result => {
      new google.maps.DirectionsRenderer({
        map,
        directions: result
      })
    })
    .catch(console.error)
}

fetchGoogleMapsApi()
