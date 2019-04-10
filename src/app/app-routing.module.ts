import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloUniverseComponent } from './hello-universe/hello-universe.component';

const routes: Routes = [
  { path: 'world', component: HelloWorldComponent },
  { path: 'universe', component: HelloUniverseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
