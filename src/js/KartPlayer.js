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
    }

    //La velocidad se pondrá a un número entre 5 y 50
    setSpeed() {
        return Math.random() * (50 - 5) + 5;
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

        this.classList.remove("win")
        this.classList.remove("lose")

        this.style.setProperty("--x", `${this.x}px`);


    }


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

    render() {
        this.shadowRoot.innerHTML = `
              <style>${this.styles}</style>
              <img src="${this.img}" alt="${this.name}">
            `;
    }

}