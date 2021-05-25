import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { CarouselComponent } from './components/elements/carousel/carousel.component';
import { EmptySpaceComponent } from './components/elements/empty-space/empty-space.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransferBlockComponent } from './components/elements/transfer-block/transfer-block.component';
import { TransactionBlockComponent } from './components/elements/transaction-block/transaction-block.component';
import { ProfileBlockComponent } from './components/elements/profile-block/profile-block.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HeaderLoggedComponent } from './components/header-logged/header-logged.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestionIconComponent } from './components/elements/question-icon/question-icon.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainpageComponent,
        CarouselComponent,
        EmptySpaceComponent,
        LoginComponent,
        RegisterComponent,
        TransferComponent,
        TransactionComponent,
        TransferBlockComponent,
        TransactionBlockComponent,
        ProfileBlockComponent,
        HeaderLoggedComponent,
        ProfileComponent,
        QuestionIconComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
