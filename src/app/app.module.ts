import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IconInputComponent } from './lib/icon-input/icon-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { ShowOneTriggerDirective } from './tabs/show-one-trigger.directive';
import { ShowOneContainerDirective } from './tabs/show-one-container.directive';
import { ShowOneDirective } from './tabs/show-one.directive';

@NgModule({
  declarations: [
    AppComponent,
    IconInputComponent,
    InputRefDirective,
    TabsComponent,
    ShowOneTriggerDirective,
    ShowOneContainerDirective,
    ShowOneDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
