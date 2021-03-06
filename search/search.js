/*const trips = [
  {
    id: 0,
    region: "Москва",
    name: "Лужники",
    level: "Легкий",
    start: "12.07.21",
    end: "30.07.21",
    zones: 5,
  },

  {
    id: 2,
    region: "СПБ",
    name: "Лужники 1",
    level: "Легкий",
    start: "12.07.21",
    end: "30.07.21",
    zones: 5,
  },
  {
    id: 1,
    region: "НСК",
    name: "Лужники 2",
    level: "Легкий",
    start: "12.07.21",
    end: "30.07.21",
    zones: 5,
  },
];
*/
const trips = [
  {
    id: 0,
    region: "Москва",
    name: "Лужники",
    level: "Легкий",
    start: "12.07.21",
    end: "30.07.21",
    zones: [
      {
        id: 0,
        name: "Обзорная площадка",
        description: "Очень интересная обзорная площадка",
        image: "https://via.placeholder.com/150x250"
      },
      {
        id: 1,
        name: "Главная церковь",
        description: "Храм построен в ...",
        image: "https://via.placeholder.com/150x250"
      },
      {
        id: 2,
        name: "Краеведческий музей",
        description: "Музей открыт в ...",
        image: "https://via.placeholder.com/150x250"
      }
    ]
  },

  {
    id: 2,
    region: "СПБ",
    name: "Лужники 1",
    level: "Легкий",
    start: "12.07.21",
    end: "30.07.21",
    zones: [
      {
        id: 0,
        name: "Обзорная площадка",
        description: "Очень интересная обзорная площадка",
        image: "https://via.placeholder.com/150x250"
      },
      {
        id: 1,
        name: "Главная церковь",
        description: "Храм построен в ...",
        image: "https://via.placeholder.com/150x250"
      },
      {
        id: 2,
        name: "Краеведческий музей",
        description: "Музей открыт в ...",
        image: "https://via.placeholder.com/150x250"
      },
      {
        id: 3,
        name: "Краеведческий музей1",
        description: "Музей открыт в ...",
        image: "https://via.placeholder.com/150x250"
      }
    ]
  },
  {
    id: 1,
    region: "НСК",
    name: "Центральный НСК",
    level: "Легкий",
    start: "12.07.21",
    end: "30.07.21",
    zones: [
      {
        id: 0,
        name: "Обзорная площадка",
        description: "Очень интересная обзорная площадка",
        image: "https://via.placeholder.com/150x250"
      },
      {
        id: 1,
        name: "Главная церковь",
        description: "Храм построен в ...",
        image: "https://via.placeholder.com/150x250"
      }
    ]
  }
];
const tbody = document.getElementById("search-results-tbody");

const renderRow = ({ id, region, name, level, start, end, zones }) =>
  `
<tr>
                <td>${region}</td>
                <td>${name}</td>
                <td>${level}</td>
                <td>${start}</td>
                <td>${end}</td>
                <td>${zones.length}</td>
                <td><button data-id="${id}" type="button">Выбрать</button></td>
</tr>

`;

const urlSearchParams = new URLSearchParams(window.location.search) //query параметры
const params = Object.fromEntries(urlSearchParams.entries()) // преобразование в объект
const {region} = params // деструктуризация объекта, достали поле region 
//const region = params.region
//trips.filter((trip)=>trip.region === region)
tbody.innerHTML = trips.filter((trip)=>trip.region === region).map(renderRow).join(""); //запятую на пробел

tbody.addEventListener('click', (event) =>{
    if (event.target.nodeName !== "BUTTON") {
        return
    }
   const id = Number(event.target.dataset.id) // id с кнопки
   const trip = trips.find((trip) => trip.id===id) //первый подходящий эл-т

   window.localStorage.setItem('chosenTrip', JSON.stringify(trip)) // передаем данные из "формы" выбора тура, чтобы отобразить
  // window.location.href="seat.html"; 
  window.open("/zones"); // в новом окне
})

