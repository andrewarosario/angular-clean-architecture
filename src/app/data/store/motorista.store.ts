import { Injectable } from "@angular/core";
import { EntityStore, StoreConfig } from "@datorama/akita";
import {
  IMotoristaStore,
  MotoristaState,
} from "src/app/domain/interfaces/store/imotorista.store";

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "motorista" })
export class MotoristaStore
  extends EntityStore<MotoristaState>
  implements IMotoristaStore
{
  constructor() {
    super();
  }

  setStore(driver: MotoristaState): void {
    this.set(driver);
  }
}
