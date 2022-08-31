import { Observable } from "rxjs";
import { MotoristaState } from "../store/imotorista.store";

export abstract class IMotoristaQuery {
  driver$: Observable<MotoristaState>;
}
