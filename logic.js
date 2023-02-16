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
const waffleIcon = L.icon({iconUrl: 'icons/waffle.svg',iconSize: [40, 40],
});
const noodleIcon = L.icon({iconUrl: 'icons/noodles.svg',iconSize: [40, 40],
});
const bubbleIcon = L.icon({iconUrl: 'icons/bubble.svg',iconSize: [40, 40],
});
const homeIcon = L.icon({iconUrl: 'icons/hotel2.svg',iconSize: [70, 70],
});               


const marker1 = L.marker([1.2838, 103.8591], {icon: ourHotelIcon})
  .bindPopup('Marina Bay Sands')
  .addTo(map);

const marker36 = L.marker([1.3002, 103.8605], {icon: homeIcon})
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

const marker7 = L.marker([1.352083, 103.819], {icon: treetopIcon})
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
  .bindPopup('<a href="https://goo.gl/maps/Qc3cyHsdfNxZM3bA6">Durian Lab Cafe</a>')
  .addTo(map);

const marker11 = L.marker([1.3214, 103.9241], {icon: bakeryIcon})
  .bindPopup('<a href="https://goo.gl/maps/tA9VwWhNy89G1C9MA">The Durian Bakery</a>')
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
  .bindPopup('<a href="https://goo.gl/maps/9zQL2UQoW9FMZdPA9">Mother Dough Bakery</a>')
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
 
const marker23 = L.marker([1.3084, 103.8858], {icon: marketIcon})
  .bindPopup('<a href="https://goo.gl/maps/5PXm3mbKWPZW9g9z8"><b>Old Airport Road Centre</b></a> <br /> Dong Ji Fried Kway Teow')
  .addTo(map);

const marker24 = L.marker([1.3494, 103.8499], {icon: marketIcon})
  .bindPopup('<a href="https://goo.gl/maps/Hkhn8zFjMvj2wrwA6">Kim San Leng Food Centre Bishan</a>')
  .addTo(map);

const marker25 = L.marker([1.3242, 103.8141], {icon: marketIcon})
  .bindPopup('<a href="https://goo.gl/maps/Vo6CmCa3Ez4JHWrg7"><b>Adam Road Centre</b></a> <br /> Selera Rasa Nasi Lemak <br /> Bahrakath Mutton Soup King ')
  .addTo(map);

const marker26 = L.marker([1.3112, 103.7882], {icon: marketIcon})
  .bindPopup('<a href="https://goo.gl/maps/u2ADzbLRddJzybhG9"><b>20 Ghim Moh Market and Food Centre</b></a> <br> Li Lao San Ghim Moh Chwee Kueh <br>Jiu Jiang Shao La')
  .addTo(map);

const marker27 = L.marker([1.2853, 103.8328], {icon: marketIcon})
  .bindPopup('<a href="https://goo.gl/maps/WwjM6RiiG9Fn6kKV8">Tiong Bahru Market</a> <br> Tiong Bahru Lor Mee <br> Zhong Yu Yuan Wi Wanton Mee <br> Tiong Bahru Hainanese Boneless Chicken Rice')
  .addTo(map);

const marker28 = L.marker([1.2833, 103.8429], {icon: chickenIcon})
  .bindPopup('<a href="https://goo.gl/maps/ZisTymYPotysgJt19">Liao Fan Hawker Chan Soya Sauce Chicken Rice and Noodle (Chinatown)</a>')
  .addTo(map);

  const marker29 = L.marker([1.3361, 103.8887], {icon: chickenIcon})
  .bindPopup('<a href="https://goo.gl/maps/ZisTymYPotysgJt19">Liao Fan Hawker Chan Soya Sauce Chicken Rice and Noodle (Tai Seng)</a>')
  .addTo(map);

const marker30 = L.marker([1.3556, 103.8363], {icon: waffleIcon})
  .bindPopup('<a href="https://goo.gl/maps/jK48qNWiwRDV6HGj9">Sin Ming Roti Prata</a>')
  .addTo(map);

const marker31 = L.marker([1.2796, 103.8466], {icon: coffeeIcon})
  .bindPopup('<a href="https://goo.gl/maps/jK48qNWiwRDV6HGj9">Coffee Break</a>')
  .addTo(map);

const marker32 = L.marker([1.42753, 103.8382], {icon: coffeeIcon})
  .bindPopup('<a href="https://goo.gl/maps/mhi2nzmMnf3rtRtQ6">Slow Bakes</a>')
  .addTo(map);
  
const marker33 = L.marker([1.3126, 103.9255], {icon: coffeeIcon})
  .bindPopup('<a href="https://goo.gl/maps/Rg1RKNUp5BmRxdx5A">Five Oars Coffee Roasters</a>')
  .addTo(map); 

const marker34 = L.marker([1.3063, 103.8511], {icon: coffeeIcon})
  .bindPopup('<a href="https://goo.gl/maps/i5bqtoUce528vir8A"><b>Tekka Centre</b></a> <br>Allaudin Biryani')
  .addTo(map); 

const marker35 = L.marker([1.3122, 103.8395], {icon: marketIcon})
  .bindPopup('<a href="https://goo.gl/maps/Gdv4QRXoreSfQ28s5">Newton Food Centre</a><br> Hup Kee Fried Oyster Omelette')
  .addTo(map); 

const marker37 = L.marker([1.2796, 103.8467], {icon: marketIcon})
  .bindPopup('<a href="https://goo.gl/maps/K39SQNZkpN7nN81GA">Amoy Food Centre</a> <br>Hoo Kee Rice Dumplings <br>Amoy Street Fried Kway Teow')
  .addTo(map);

const marker38 = L.marker([1.3012, 103.8378], {icon: coffeeIcon})
  .bindPopup('<a href="https://goo.gl/maps/eoYbRPo5G9vS7ESs6">Oriole Coffee + Bar</a>')
  .addTo(map); 

const marker39 = L.marker([1.3611, 103.8877], {icon: coffeeIcon})
  .bindPopup('<a href="https://goo.gl/maps/4aZjGHr74fc4CT5s5">Two Cranes Cafe</a>')
  .addTo(map); 

const marker40 = L.marker([1.3053, 103.8625], {icon: noodleIcon})
  .bindPopup('<a href="https://goo.gl/maps/FxZP85RLsvhE34Rq9">Hill Street Tai Hwa</a>')
  .addTo(map); 

const marker41 = L.marker([1.2850, 103.84975], {icon: bubbleIcon})
  .bindPopup('<a href="https://goo.gl/maps/8b9b56rnZsn43rym6">Tea Pulse</a>')
  .addTo(map); 

const marker42 = L.marker([1.3061, 103.8563], {icon: bakeryIcon})
  .bindPopup('<a href="https://goo.gl/maps/pTZdChdLCAiC48UZA">Ms Durian</a>')
  .addTo(map); 

const marker43 = L.marker([1.2932, 103.8511], {icon: bakeryIcon})
  .bindPopup('<a href="https://goo.gl/maps/gYF3U8yqDuY53nFQ6">Wu Pao Chun Capitol Piazza</a>')
  .addTo(map); 

const marker44 = L.marker([1.2940, 103.8386], {icon: coffeeIcon})
  .bindPopup('<a href="https://goo.gl/maps/8eBrYE4qraDkogaDA">Common Man Coffee Roasters</a>')
  .addTo(map); 

const marker45 = L.marker([1.3369, 103.9053], {icon: coffeeIcon})
  .bindPopup('<a href="https://goo.gl/maps/t5qkPLAiAuGuW2iH9">Compound Coffee Co.</a>')
  .addTo(map); 

// const marker = L.marker([], {icon: Icon})
//   .bindPopup('<a href=""></a>')
//   .addTo(map); 

