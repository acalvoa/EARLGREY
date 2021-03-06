import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClusterComponent } from './cluster/cluster.component';
import { LoginComponent } from './login/login.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { ControladoresComponent } from './controladores/controladores.component';
import { CronjobsComponent } from './cronjobs/cronjobs.component';
import { LogsComponent } from './logs/logs.component';
import { ModelosComponent } from './modelos/modelos.component';
import { PropertiesComponent } from './properties/properties.component';
import { IndexComponent } from './index/index.component';
import { RutasComponent } from './rutas/rutas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { FileDropModule } from 'ngx-file-drop';
import { UsersComponent } from './users/users.component';
import { ConfigsComponent } from './configs/configs.component';
import { CacheComponent } from './cache/cache.component';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule,NgbModule, PipesModule, FormsModule, SharedModule, FileDropModule],
  declarations: [HomeComponent,
  ClusterComponent,ConfiguracionesComponent,ControladoresComponent,CronjobsComponent,
  LogsComponent, ModelosComponent, PropertiesComponent, RutasComponent, LoginComponent, 
  IndexComponent, UsersComponent, ConfigsComponent, CacheComponent],
  exports: [CommonModule, FormsModule, RouterModule, HomeComponent,
  ClusterComponent,ConfiguracionesComponent,ControladoresComponent,CronjobsComponent,
  LogsComponent, ModelosComponent, PropertiesComponent, RutasComponent, LoginComponent, 
  IndexComponent, UsersComponent, ConfigsComponent, CacheComponent]
})
export class FeaturesModule {
}
