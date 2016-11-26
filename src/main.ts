import {
	NgModule,
	Component
} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HelloWorld } from './helloworld';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@NgModule({

	declarations: [HelloWorld],
	imports: [BrowserModule],

	bootstrap: [HelloWorld],

})
class HelloWorldAppModule { }

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
