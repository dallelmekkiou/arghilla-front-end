import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './components/about/about.component'
import { AdminComponent } from './components/admin/admin.component'
import { AuthentificationComponent } from './components/authentification/authentification.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { HomeComponent } from './components/home/home.component'
import { ShopComponent } from './components/shop/shop.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
  { path: 'authentification', component: AuthentificationComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
