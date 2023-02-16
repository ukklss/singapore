// const map = L.map('map', {
//   center: [1.3521, 103.8198],
//   zoom: 11.5
// });

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors' }).addTo(map);
 










// // Food


// const marker31 = L.marker([1.3099635457294077, 103.90201362472423], {icon: basicBeachIcon})
//   .bindPopup('Marina Bay Sands')
//   .addTo(map);

// const marker32 = L.marker([1.279138043837685, 103.84404781308257], {icon: basicBeachIcon})
//   .bindPopup('Marina Bay Sands')
//   .addTo(map);

// const marker33 = L.marker([1.2795835438056944, 103.84672225541094], {icon: basicBeachIcon})

//   .bindPopup('Marina Bay Sands')
//   .addTo(map);

// const marker34 = L.marker([1.2860803986513647, 103.84589033644124], {icon: basicBeachIcon})
//   .bindPopup('Marina Bay Sands')
//   .addTo(map);

// const marker35 = L.marker([1.2863591755348776, 103.8592400677067], {icon: museumIcon}).addTo(map);






const map = L.map('map', {
  center: [1.3521, 103.8198],
  zoom: 11.5
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors' }).addTo(map);
 
const hotelIcon = L.icon({iconUrl: 'icons/hotel.svg',iconSize: [40, 40],
});
const chickenIcon = L.icon({iconUrl: 'icons/chicken.svg',iconSize: [40, 40],
});
const bakeryIcon = L.icon({iconUrl: 'icons/bakery.svg',iconSize: [40, 40],
});
const chinatownIcon = L.icon({iconUrl: 'icons/chinatown.svg',iconSize: [40, 40],
});
const coffeeIcon = L.icon({iconUrl: 'icons/coffee.svg',iconSize: [40, 40],
});
const gardenIcon = L.icon({iconUrl: 'icons/garden.svg',iconSize: [40, 40],
});
const ourHotelIcon = L.icon({iconUrl: 'icons/ourhotel.svg',iconSize: [40, 40],
});
const ferriswheelIcon = L.icon({iconUrl: 'icons/ferriswheel.svg',iconSize: [40, 40],
});
const orchardRoadIcon = L.icon({iconUrl: 'icons/shopping.svg',iconSize: [40, 40],
});
const treetopIcon = L.icon({iconUrl: 'icons/treetop.svg',iconSize: [40, 40],
}); 
const museumIcon = L.icon({iconUrl: 'icons/museum.svg',iconSize: [40, 40],
});
const beachIcon = L.icon({iconUrl: 'icons/island.svg',iconSize: [40, 40],
});      
const marketIcon = L.icon({iconUrl: 'icons/market.svg',iconSize: [40, 40],
});      


const marker1 = L.marker([1.2838, 103.8591], {icon: ourHotelIcon})
  .bindPopup('Marina Bay Sands')
  .addTo(map);

const marker36 = L.marker([1.3002, 103.8605], {icon:ourHotelIcon})
  .bindPopup('Park Royal Hotel: Beach Front')
  .addTo(map);

const marker2 = L.marker([1.2816, 103.8636], {icon: gardenIcon})
  .bindPopup('Gardens by The Bay')
  .addTo(map);

 const marker3 = L.marker([1.3138, 103.8159], {icon: gardenIcon})
  .bindPopup('Singapore Botanic Gardens')
  .addTo(map); 

const marker4 = L.marker([1.2893, 103.8631], {icon: ferriswheelIcon})
  .bindPopup('Singapore Flyer')
  .addTo(map);

 const marker5 = L.marker([1.3048, 103.8318], {icon: orchardRoadIcon})
  .bindPopup('Orchard Road')
  .addTo(map);
  
const marker6 = L.marker([1.2818, 103.8439], {icon: chinatownIcon})
  .bindPopup('Chinatown')
  .addTo(map);

const marker7 = L.marker([1,352083, 103.819], {icon: treetopIcon})
  .bindPopup('Treetop Walk')
  .addTo(map);

const marker8 = L.marker([1.2902, 103.8515], {icon: museumIcon})
  .bindPopup('National Gallery of Singapore')
  .addTo(map);

const marker9 = L.marker([1.2494, 103.8303], {icon: beachIcon})
  .bindPopup('Sentosa Island')
  .addTo(map);


//Food
const marker10 = L.marker([1.2863, 103.8049], {icon: coffeeIcon})
  .bindPopup('Durian Lab Cafe')
  .addTo(map);

const marker11 = L.marker([1.3215, 103.9241], {icon: bakeryIcon})
  .bindPopup('Durian Bakery')
  .addTo(map);

const marker12 = L.marker([1.3526, 103.9447], {icon: bakeryIcon})
  .bindPopup('Gokoku Japanese Bakery (Juro Point)')
  .addTo(map);

const marker13 = L.marker([1.2941, 103.8320], {icon: bakeryIcon})
  .bindPopup('Gokoku Japanese Bakery (Great World)')
  .addTo(map);

const marker14 = L.marker([1.2923, 103.8598], {icon: bakeryIcon})
  .bindPopup('Gokoku Japanese Bakery (Millenia Walk)')
  .addTo(map);

const marker15 = L.marker([1.3511, 103.8718], {icon: bakeryIcon})
  .bindPopup('Gokoku Japanese Bakery (&JOY Japanese Food Street)')
  .addTo(map);

const marker16 = L.marker([1.3044, 103.8357], {icon: bakeryIcon})
  .bindPopup('<a href="https://goo.gl/maps/aUWFfx4mcwkGv3oS9">Wu Pao Chun Orchard Road</a>')
  .addTo(map);

const marker17 = L.marker([1.3041, 103.8324], {icon: bakeryIcon})
  .bindPopup('Le Matin Patisserie')
  .addTo(map);

const marker18 = L.marker([1.3145, 103.8527], {icon: bakeryIcon})
  .bindPopup('<a href="https://goo.gl/maps/m9LqB61kB4weQTfq9">The Bakehaus</a>')
  .addTo(map);

const marker19 = L.marker([1.3036, 103.8588], {icon: bakeryIcon})
  .bindPopup('<a hre="https://goo.gl/maps/9zQL2UQoW9FMZdPA9">Mother Dough Bakery</a>')
  .addTo(map);

const marker20 = L.marker([1.2785, 103.8437], {icon: bakeryIcon})
  .bindPopup('<a href="https://goo.gl/maps/ExE85n6kDJbfcWZ68">Champon Bolo Bun</a>')
  .addTo(map);
  
const marker21 = L.marker([1.28053, 103.8447], {icon: marketIcon})
  .bindPopup('<a href="https://goo.gl/maps/5tdUeD7miG4mxcuM9"><b>Maxwell Food Centre</b></a> <br /> Tian Tian Hainanese Chicken Rice <br /> Fu Shun Roasted Meat Specialist')
  .addTo(map);

const marker22 = L.marker([1.3168, 103.8055], {icon: bakeryIcon})
  .bindPopup('<a href="https://goo.gl/maps/5BGcu2mJe7V9YTjH8">Bakery Brera & Fine Foods</a>')
  .addTo(map);
 
// const marker23 = L.marker([1.3084, 103.8858], {icon: marketIcon})
//   .bindPopup('<a href="https://goo.gl/maps/5PXm3mbKWPZW9g9z8"><b>Old Airport Road Centre</b></a> <br /> Dong Ji Fried Kway Teow')
//   .addTo(map);

// const marker24 = L.marker([1.3494, 103.8499], {icon: marketIcon})
//   .bindPopup('<a href="https://goo.gl/maps/Hkhn8zFjMvj2wrwA6">Kim San Leng Food Centre Bishan</a>')
//   .addTo(map);

// const marker25 = L.marker([1.3242, 103.8141], {icon: marketIcon})
//   .bindPopup('<a href="https://goo.gl/maps/Vo6CmCa3Ez4JHWrg7"><b>Adam Road Centre</b></a> <br /> Selera Rasa Nasi Lemak <br /> Bahrakath Mutton Soup King ')
//   .addTo(map);

// const marker26 = L.marker([1.3112174976707525, 103.7882870400675], {icon: basicBeachIcon})
//   .bindPopup('Marina Bay Sands')
//   .addTo(map);

// const marker27 = L.marker([1.2852664127104851, 103.83285434006758], {icon: basicBeachIcon})
//   .bindPopup('Marina Bay Sands')
//   .addTo(map);

// const marker28 = L.marker([1.2858722134470977, 103.84199134990234], {icon: basicBeachIcon})
//   .bindPopup('Marina Bay Sands')
//   .addTo(map);

// const marker29 = L.marker([1.3380435890447093, 103.88885490477573], {icon: basicBeachIcon})
//   .bindPopup('Marina Bay Sands')
//   .addTo(map);

// const marker30 = L.marker([1.3556159706916826, 103.83632994006739], {icon: basicBeachIcon})
//   .bindPopup('Marina Bay Sands')
//   .addTo(map);