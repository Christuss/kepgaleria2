import Model from "../model/Model.js";
import NagyKepView from "../view/NagyKepView.js";

class Controller {
    constructor() {
        const MODEL = new Model();
        const NAGYKEP = new NagyKepView($('.nagykep'), MODEL.getAktKep());
        $(window).on("bal",()=>{
            MODEL.bal();
            let aktKep = MODEL.getAktKep();
            NAGYKEP.NagyKepElemBeallit(aktKep)
        })
        $(window).on("jobb",()=>{
            MODEL.jobb();
            let aktKep = MODEL.getAktKep();
            NAGYKEP.NagyKepElemBeallit(aktKep)
        })
    }
}

export default Controller;