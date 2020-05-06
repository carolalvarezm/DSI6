export class KartPlayer extends HTMLElement {
    constructor(name, config) {
        super();

        this.name = name;
        this.y = config["y"];
        this.x = 0;

        this.img = config["image"];

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    addToRoad(road) {
        road.appendChild(this);
    }


    inc() {
        this.x = this.x + this.setSpeed()
        this.style.setProperty("--x", `${this.x}px`);
        this.style.setProperty("--y", `${this.y}px`);
    }

    //La velocidad se pondrá a un número entre 20 y 101
    setSpeed() {
        const aux = Math.random() * (20 - 5) + 5;
        console.log(aux);
        return aux;
    }

    isWinner() {
        return this.x >= 950 ? true : false;
    }

    win() {
        this.classList.add("win");
    }
    lose() {
        this.classList.add("lose");
    }
    restart() {
        this.x = 0;
        this.style.setProperty("--x", `${this.x}px`);

        this.classList.remove("win")
        this.classList.remove("lose")

        this.render();
    }



    get styles() {
        return `
           :host {
             position: absolute;
             display: inline-block;
             left: 0;
             top: ${this.y}px;
             transform: translateX(var(--x));
             transition: transform 0.25s;
             will-change: transform;
           }
           :host(.win) {
                filter:drop_shadow(0,0,10px,yellow);
                z-index:5;
            }
           :host(.lose) {
                opacity:0.25;
                z-index:5;
            }
         `;
    }

    render() {
        this.shadowRoot.innerHTML = `
              <style>${this.styles}</style>
              <img src="${this.img}" alt="${this.name}">
            `;
    }

}