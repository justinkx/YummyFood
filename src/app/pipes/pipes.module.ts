import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search.pipe';
import { SortPipe } from './sort/sort.pipe';

@NgModule({
    declarations: [SearchPipe,SortPipe],
    exports: [SearchPipe,SortPipe]
})

export class PipesModule {}