import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
/* The platformBrowserDynamic() part of this line of code indicates that we are about to boot Angular in a 
   browser environment.As Angular can be used in Javascript host environments asides the browser (e.g. on the
   in a web worker), its thus imperative that we specify the environment in which our App is to be booted,the 
  bootstrapModule() function helps bootstrap our root module taking in the root module as its argument.*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  /* AppModule is our root module which is the entry module for our application, this can actually be any 
   of the modules in our application but by convention AppModule is used as the root module. */
