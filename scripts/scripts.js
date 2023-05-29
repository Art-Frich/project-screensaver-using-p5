var starsCount = 700;
var stars = [];

class Star {
  constructor() {
    this.x = random(-width/2, width/2); //здесь и далее, width - это не совсем width. Это width/2.
    this.y = random(-height/2, height/2);
    this.z = random(width); //удаленность от наблюдателя
  }
  // Примечание: width & height - системные переменные, получающие свои значения в момент создания холста

  // метод пересоздания звезд
  updateStars() {
    var speedStar = 12; // скорость приближения звёзд
    this.z -= speedStar;
    if (this.z < 1) { //если звезда улетела за экран, то отрисовать новую
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width*1.25);
    }
  }

  // метод отрисовки звезды на экране
  drawStar() {
    fill(233); // выбор цвета
    noStroke(); // отключаем контур

    // func "map" from p5 js
    // z изменилась -> пропорционально меняем x,y
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    //z уменьшается == звезда ближе к пользователю -> она крупнее == растёт ёё радиус
    var r = map(this.z, 0, width*1.25, 9, 0);
    ellipse(sx, sy, r, r); // отрисовка по новым размерам и координатам
  }
}

// при подключенной библиотеке p5 есть зарезервированное название функции "setup" в ней код, который будет выполнен при загрузке страницы
function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i=0; i < starsCount; i++) {
    stars[i] = new Star();
  }
}

//аналогично "setup" есть функция "draw" - она выполняется пока не закроется страничка, если не сказано иное
function draw() {
  background(0, 180);
  translate(width/2, height/2); //"формируем центр экрана, куда полетим сквозь звезды"

  //отрисовка звезд
  for (let i = 0; i < starsCount; i++) {
    stars[i].drawStar();
    stars[i].updateStars();
  }

  addEventListener('resize', () => {
    resizeCanvas(innerWidth, innerHeight);
  })
}
