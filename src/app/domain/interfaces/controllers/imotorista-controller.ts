import { Observable } from "rxjs";
import { DriverEntity } from "../../entities/driver-entity";
import { MotoristaState } from "../store/imotorista.store";

export abstract class IMotoristaController {
  driver$: Observable<MotoristaState>;
  abstract get(id?: number): Observable<DriverEntity>;
  abstract insert(param: DriverEntity): Observable<DriverEntity>;
  abstract update(param: DriverEntity): Observable<DriverEntity>;
  abstract disableEnable(id: number, status: boolean): Observable<DriverEntity>;
}
