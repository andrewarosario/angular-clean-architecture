import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { IUsuarioRepository } from "../domain/interfaces/repository/iusuario-repository";
import { UsuarioRepository } from "./repository/usuario/usuario-repository";
import { IMotoristaRepository } from "../domain/interfaces/repository/imotorista-repository";
import { MotoristaRepositoryService } from "./repository/motorista/motorista-repository.service";
import { IMotoristaStore } from "../domain/interfaces/store/imotorista.store";
import { MotoristaStore } from "./store/motorista.store";
import { IMotoristaQuery } from "../domain/interfaces/query/imotorista.query";
import { MotoristaQuery } from "./query/motorista.query";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: IUsuarioRepository, useClass: UsuarioRepository },
    { provide: IMotoristaRepository, useClass: MotoristaRepositoryService },
    { provide: IMotoristaStore, useClass: MotoristaStore },
    { provide: IMotoristaQuery, useClass: MotoristaQuery },
  ],
})
export class DataModule {}
