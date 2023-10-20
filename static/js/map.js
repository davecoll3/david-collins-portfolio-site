// Initiate Google Map
function initMap() {
    // Find my location and center map
    const myLatLng = { lat: 51.483828857178615, lng:-3.170376763834521 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.1,
        center: {
            lat: 54.23779157520459,
            lng: -4.548827930971738
        }
    });
    // Add marker
    new google.maps.Marker({
        position: myLatLng,
        map
    });
}
// Call initMap function
window.initMap = initMap;