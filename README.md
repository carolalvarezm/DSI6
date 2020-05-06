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
### addToRoad()
### inc()
### setSpeed()
### isWinner()
### win()
### lose()
### restart
### get styles()
### render()

## Reto 1: Item
