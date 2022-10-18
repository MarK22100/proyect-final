import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AlertModule, AccordionModule, SharedModule } from '@coreui/angular';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { InfoComponent } from './components/info/info.component';
import { FormsModule } from "@angular/forms";
import { IgxAccordionModule, IgxSwitchModule } from "igniteui-angular";
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

//I keep the new line
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    LoginComponent,
    InicioComponent,
    InfoComponent,
    SkillsComponent,
    ProyectosComponent,

  ],
  imports: [
    AlertModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    CdkAccordionModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxAccordionModule,
    IgxSwitchModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {
}
