import { BolsaController } from "../../controllers/bolsaController";
import { Moneda } from "../../models/Moneda";

const prueba: Moneda = BolsaController.probarMoneda()

console.log(prueba)