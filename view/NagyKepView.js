class NagyKepView {
    #kep;
    constructor(szuloElem, kep) {
        this.#kep = kep
        this.szuloElem = szuloElem;
        this.#htmlLetrehozasa()
        this.balGombElem = $("#balGomb")
        this.jobbGombElem = $("#jobbGomb")
        this.nagyIMGElem = $("#nagyIMG")

        this.balGombElem.on('click', () => {
            this.#esemenyTrigger("bal")
        })
        this.jobbGombElem.on('click', () => {
            this.#esemenyTrigger("jobb")
        })
    }

    #htmlLetrehozasa() {
        let txt = `<div class="fokeptarolo"><img id="nagyIMG" src ="${this.#kep}" alt="${this.#kep}"> </div> `
        txt += `<button id="balGomb">bal</button>`
        txt += `<button id="jobbGomb">jobb</button>`
        this.szuloElem.html(txt);
    }
    #esemenyTrigger(esemeny) {
        const esemenyem = new CustomEvent(esemeny)
        window.dispatchEvent(esemenyem);
    }

    NagyKepElemBeallit(kep) {
        this.nagyIMGElem.attr("src", kep)
        this.nagyIMGElem.attr("alt", kep)
    }
}

export default NagyKepView;