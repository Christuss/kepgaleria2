import KEPEKLISTA from "./adat.js";


class Model {
    #kepLista = []
    #id;
    constructor() {
        this.#kepLista = KEPEKLISTA;
        this.#id  = 0;
    }
    jobb () {
        this.#id++;
        if (this.#id > this.#kepLista.length - 1) {
            this.#id = 0
        }
    }
    bal () {
        this.#id--;
        if (this.#id < 0) {
            this.#id = this.#kepLista.length - 1;
        }
    }
    getKepLista() {
        return [...this.#kepLista];
    }
    getAktKep() {
        return this.#kepLista[this.#id];
    }
}

export default Model