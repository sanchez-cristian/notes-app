import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    {
        path: "", 
        component: HomeComponent
    }, 
    {
        path: 'notes/:id',
        component: EditNoteComponent
    },
    {
        path: 'notes', 
        redirectTo: '',
    }, 
    {
        path: "**",
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
