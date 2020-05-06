export class KartPlayer extends HTMLElement {
    constructor(name, config) {
        super();

        console.log(config["image"])
        this.name = name;
        this.y = config["y"];
        this.x = 0;

        this.img = config["image"];

        this.attachShadow({ mode: 'open' });
    }

    addToRoad(road) {
        road.appendChild(this);
        this.render();
    }


    inc() {
        this.x = this.x + this.setSpeed()
        this.style.setProperty("--var-x", `${this.x}px`);
        this.style.setProperty("--var-y", `${this.y}px`);
        this.render();
    }

    //La velocidad se pondrá a un número entre 20 y 101
    setSpeed() {
        return Math.random() * (101 - 20) + 20;
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
        this.render();
    }



    get styles() {
        return `
           :host {
             position: absolute;
             display: inline-block;
             left: 0;
             top: ${this.y}px;
             transform: translateX(var(--x)) translateY(var(--y));
             transition: transform 0.25s;
             will-change: transform;
           }
           :host-context(.win) {
                filter:drop_shadow(0,0,6px,gold);
                z-index:5;
            }
            :host-context(.lose) {
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