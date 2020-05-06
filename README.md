# Práctica 11: WebComponents

## Index.js
* En el index.js lo primero que hacemos es importar las imágenes de los karts:
```javascript

```
* Justo después importamos el componente KartPlayer:
```javascript

```
* A continuación creamos los karts pasandole al constructor del componente el nombre y un objeto de configuración que contendrá la imagen y la posición de la coordenada y. Después de crearlos los añadimos al html con el método *addToRoad()*:
```javascript
for (const [name, image] of Object.entries(players)) {
    const config = {
        image,
        y: karts.length * 64
    };
    const kart = new KartPlayer(name, config);
    kart.addToRoad(road);
    karts.push(kart);
};
```
* También tenemos dos listeners sobre los botones de start y restart para que cuando sean pulsados empiece o se reinicie:
```javascript
botonStart.onclick = () => startRace();
botonRestart.onclick = () => restartRace();
```
### startRace
* La función de startRace lo que hace es poner un intervalo en el que se repetirá startIteraton cada 1000/60 segundos. También desactivamos los botones de start y restart: 
```javascript
const startRace = () => {
    timer = setInterval(() => startIteration(), (1000 / 60));
    botonStart.disabled = true;
    botonRestart.disabled = true;
};

```
### endRace
* Con la función endRace() terminaremos la carrera eliminando el intervalo y añadiendole estilos al ganador y perdedores con los métodos *win()* y *lose()*. También activamos el botón restart para poder restablecer los karts al principio:
```javascript
const endRace = () => {
    clearInterval(timer);
    karts.forEach(kart => (kart.isWinner() ? kart.win() : kart.lose()));
    botonRestart.disabled = false;
};
```
### restartRace
* Con restartRace() pondremos todos los karts como al principio con el método *restart()* y activaremos el botón de start:
```javascript
const restartRace = () => {
    karts.forEach(kart => kart.restart());
    botonStart.disabled = false;
};
``` 
### startIteration
* Para finalizar tenemos la función startIteration que llamará al método *inc()* y comprobará si algún kart ha llegado a la meta, y si es así llamará a la función endRace para terminar la carrera:
```javascript
const startIteration = () => {
    karts.forEach(kart => kart.inc());
    if (karts.some(kart => kart.isWinner())) endRace();
};
```

## KartPlayer.js
### Constructor()
* Lo primero que hacemos en el constructor es llamar al constructor de la clase padre (HTMLElement). A continuación inicializamos el nombre, la coordenada *y* a la posición que le hemos pasado en el objeto de configuración, la coordenada *x* a 0 y la imagen. Además inicializamos un ShadowDom en modo *open* y llamamos al método render que veremos más adelante: 
```javascript
    constructor(name, config) {
        super();

        this.name = name;
        this.y = config["y"];
        this.x = 0;
        this.img = config["image"];

        this.attachShadow({ mode: 'open' });
        this.render();
    }
```
### addToRoad()
* Este método lo único que hace es añadir el componente como hijo del elemento road:
```javascript

    addToRoad(road) {
        road.appendChild(this);
    }
```
### inc()
* Con este método incrementamos la coordenada x sumándole una velocidad que calcularemos con *setSpeed()* y añadiendo este valor mediante una propiedad a css:
```javascript
    inc() {
        this.x = this.x + this.setSpeed()
        this.style.setProperty("--x", `${this.x}px`);
    }
```
### setSpeed()
* Con este método sacamos una velocidad al azar entre 5 y 50 con *Math.random()*:
```javascript
    setSpeed() {
        return Math.random() * (50 - 5) + 5;
    }
```
### isWinner()
* Este método nos devuelve *true* cuando la coordena x es mayor o igual a 950:
```javascript

    isWinner() {
        return this.x >= 950 ? true : false;
    }
```
### win()
* Con este método añadimos la clase *win* al componente:
```javascript
    win() {
        this.classList.add("win");
    }

```
### lose()
* Con este método añadimos la clase *lose* al componente:
```javascript
    lose() {
        this.classList.add("lose");
    }
```
### restart
* Con este método restablecemos los karts a su posición inicial quitando las clases de win o lose y actualizando también la propiedad --x:
```javascript
    restart() {
        this.x = 0;

        this.classList.remove("win")
        this.classList.remove("lose")

        this.style.setProperty("--x", `${this.x}px`);
    }
``` 
### get styles()
* Este método es para obtener los estilos con this.styles. En él returnamos un código css que tiene muchas cosas interesantes:
    * En primer lugar tenemos una transformación que hace que se traslade el componente cada vez que cambien la propiedad y que dure lo mismo que nuestros intervalos anteriores.
    * Después se aplicará una sombra amarilla cuando añadamos la clase win y la opacacidad la bajaremos cuando se tengamos la clase lose.
```javascript
    get styles() {
        return `
           :host {
             position: absolute;
             display: inline-block;
             left: 0;
             top: ${this.y}px;
             transform: translateX(var(--x));
             transition: transform 60/1000s;
             will-change: transform;
           }
           :host(.win) {
                filter:drop-shadow(0 0 6px yellow);
                z-index:5;
            }
           :host(.lose) {
                opacity:0.25;
            }
         `;
    }
```
### render()
* Este último método nos añade los estilos anteriores y la imagen a nuestro ShadowDom:
```javascript
    render() {
        this.shadowRoot.innerHTML = `
              <style>${this.styles}</style>
              <img src="${this.img}" alt="${this.name}">
            `;
    }
```

## Reto 1: Item
