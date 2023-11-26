function newtotem() {
  fetch('totem.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const jsonData = JSON.parse(JSON.stringify(data));
    const totems = jsonData.totems;
    const kach = jsonData.char;

  generate(totems, kach);
  });
}

function generate(totems, kach) {
  // установка параметров
  const paramList = document.getElementById('params');
  const smartParam = document.getElementById('isSmart').checked;

  // элементы для редакта
  const nameSpot = document.getElementById('beast');
  const picSpot = document.getElementById('pic');
  const qualSpot = document.getElementById('char');

  // генерация тотема
  const randT = Math.floor(Math.random() * totems.length);
  const randomTotem = totems[randT];

  const { name, pic, charType, chance } = randomTotem;

  if (smartParam === true) {
    // умная генерация качества
    const allQualities = [];
  
    charType.forEach(type => {
      const selectedType = kach.find(item => item.type === type);
      if (selectedType) {
        allQualities.push(...selectedType.chars);
      }
  });

    const randChar = Math.floor(Math.random() * allQualities.length);
    var randomChar = allQualities[randChar];
  
    // вывод параметров
    paramList.innerHTML = 'умная генерация'
  } else {
    // рандомная генерация качества
    const randType = Math.floor(Math.random() * kach.length);
    const randomType = kach[randType];

    const randChar = Math.floor(Math.random() * randomType.chars.length);
    var randomChar = randomType.chars[randChar];

    // вывод параметров
    paramList.innerHTML = 'рандомная генерация'
  }

  // вывод всего
  nameSpot.innerHTML = name;
  picSpot.innerHTML = '<img src="' + pic + '"border="0">';
  qualSpot.innerHTML = '⠀« <b>' + randomChar + '</b> »⠀';

/* 
  // проверка генерации в консоли
  const resultTotem = `случайный тотем: ${name}; вид: ${pic}; качества: ${charType.join(', ')}, случайное качество: ${randomChar}, шанс: ${chance}`;
  console.log(resultTotem);
*/
}