import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {PreloadImageComponent} from './preload-image/preload-image.component';

@NgModule({
  imports: [
    IonicModule,
    ],
    declarations: [PreloadImageComponent],
  exports: [PreloadImageComponent]
})
export class ComponentsModule {}
