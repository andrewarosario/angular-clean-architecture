import { EntityState } from "../../entities/base/state-entity";
import { DriverEntity } from "../../entities/driver-entity";

export interface MotoristaState extends EntityState<DriverEntity, string> {}

export abstract class IMotoristaStore {
  abstract setStore(driver: MotoristaState): void;
}
