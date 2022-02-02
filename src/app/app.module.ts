import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { ShopComponent } from './components/shop/shop.component'
import { AdminComponent } from './components/admin/admin.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { AuthentificationComponent } from './components/authentification/authentification.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ShopComponent,
    AdminComponent,
    AboutComponent,
    AuthentificationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
