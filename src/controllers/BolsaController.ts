import { Moneda } from "../models/Moneda";
import { MonedaSerializer } from "../serializers/MonedaSerializer";
import { MonedaSchema } from "../schemas/MonedaSchema";

export class BolsaController {
    static probarMoneda(): Moneda {
        const dolar: Moneda = new Moneda("Dolar", "USD");
        return dolar
    }

    static probarMonedaSerializer(): Record<string, any> {
        const dolar: Moneda = BolsaController.probarMoneda()
        const x: Record<string, any> = MonedaSerializer.toPlain(dolar)
        return x
    }

    static guardarMoneda(nombre : string, simbolo : string): Moneda {
        const moneda: Moneda = new Moneda(nombre, simbolo);
        return moneda
    }

}