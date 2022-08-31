import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { Observable } from "rxjs";
import { IMotoristaQuery } from "src/app/domain/interfaces/query/imotorista.query";
import { MotoristaState } from "src/app/domain/interfaces/store/imotorista.store";
import { MotoristaStore } from "../store/motorista.store";

@Injectable({ providedIn: "root" })
export class MotoristaQuery
  extends QueryEntity<MotoristaState>
  implements IMotoristaQuery
{
  driver$: Observable<MotoristaState>;

  constructor(protected store: MotoristaStore) {
    super(store);
    this.driver$ = this.selectAll();
  }
}
