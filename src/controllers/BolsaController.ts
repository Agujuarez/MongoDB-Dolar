import { Moneda } from "../models/Moneda";

export class BolsaController {
    static probarMoneda(): Moneda {
        const dolar: Moneda = new Moneda("Dolar", "USD");
        return dolar
    }
}