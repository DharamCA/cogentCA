import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OffersComponent } from './offers/offers.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PvtltdcompanyComponent } from './pvtltdcompany/pvtltdcompany.component';
import { PubltdcompanyComponent } from './publtdcompany/publtdcompany.component';
import { OneprsncompanyComponent } from './oneprsncompany/oneprsncompany.component';
import { ParternshipfirmComponent } from './parternshipfirm/parternshipfirm.component';
import { LimitedliaparternshipComponent } from './limitedliaparternship/limitedliaparternship.component';
import { SoleproprietorshipComponent } from './soleproprietorship/soleproprietorship.component';
import { GstregistrationComponent } from './gstregistration/gstregistration.component';
import { GstcancellationComponent } from './gstcancellation/gstcancellation.component';
import { GstmodificationComponent } from './gstmodification/gstmodification.component';
import { GstreturnfillingComponent } from './gstreturnfilling/gstreturnfilling.component';
import { IsocertificateComponent } from './isocertificate/isocertificate.component';
import { MsmeregistrationComponent } from './msmeregistration/msmeregistration.component';
import { FssairegistrationComponent } from './fssairegistration/fssairegistration.component';
import { DigisigcertificateComponent } from './digisigcertificate/digisigcertificate.component';
import { ShopregistrationComponent } from './shopregistration/shopregistration.component';
import { PanComponent } from './pan/pan.component';
import { TanComponent } from './tan/tan.component';
import { IsbnComponent } from './isbn/isbn.component';
import { NsicregistrationComponent } from './nsicregistration/nsicregistration.component';
import { GemregistrationComponent } from './gemregistration/gemregistration.component';
import { ReraregistrationComponent } from './reraregistration/reraregistration.component';
import { BarcoderegistrationComponent } from './barcoderegistration/barcoderegistration.component';
import { TrademarkComponent } from './trademark/trademark.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PatentComponent } from './patent/patent.component';
import { TrademarkobjectrplyComponent } from './trademarkobjectrply/trademarkobjectrply.component';
import { LogodesignComponent } from './logodesign/logodesign.component';
import { DesignregistrationComponent } from './designregistration/designregistration.component';
import { Iso9001Component } from './iso9001/iso9001.component';
import { Iso14001Component } from './iso14001/iso14001.component';
import { Iso22000Component } from './iso22000/iso22000.component';
import { Iso27001Component } from './iso27001/iso27001.component';
import { Iso50001Component } from './iso50001/iso50001.component';
import { ImportexportcodeComponent } from './importexportcode/importexportcode.component';
import { IecmodificationComponent } from './iecmodification/iecmodification.component';
import { FieoregistrationComponent } from './fieoregistration/fieoregistration.component';
import { ApedaregistrationComponent } from './apedaregistration/apedaregistration.component';
import { LetterofundertakingComponent } from './letterofundertaking/letterofundertaking.component';
import { IncometaxreturnComponent } from './incometaxreturn/incometaxreturn.component';
import { GstreturnComponent } from './gstreturn/gstreturn.component';
import { TdsreturnfillingComponent } from './tdsreturnfilling/tdsreturnfilling.component';
import { BusinessplanprojectreportComponent } from './businessplanprojectreport/businessplanprojectreport.component';
import { PfregistrationComponent } from './pfregistration/pfregistration.component';
import { EsiregistrationComponent } from './esiregistration/esiregistration.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PvtldtcompanyannualComponent } from './pvtldtcompanyannual/pvtldtcompanyannual.component';
import { LimitedliapartershipannulComponent } from './limitedliapartershipannul/limitedliapartershipannul.component';
import { Forminc22aannualComponent } from './forminc22aannual/forminc22aannual.component';
import { Formdir3kycannualComponent } from './formdir3kycannual/formdir3kycannual.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultComponent } from './consult/consult.component';
import { BusinessvaluationComponent } from './businessvaluation/businessvaluation.component';
import { CorporatefinanceComponent } from './corporatefinance/corporatefinance.component';
import { QueryformComponent } from './queryform/queryform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { CareerComponent } from './career/career.component';
import { TermconditionComponent } from './termcondition/termcondition.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { RefundpolicyComponent } from './refundpolicy/refundpolicy.component';
import { ConfidentialpolicyComponent } from './confidentialpolicy/confidentialpolicy.component';
import { AdministratorpageComponent } from './administratorpage/administratorpage.component';
import { SuspComponent } from './susp/susp.component';
import { ScpComponent } from './scp/scp.component';
import { BpcComponent } from './bpc/bpc.component';
import { GsspComponent } from './gssp/gssp.component';
import { GrapComponent } from './grap/grap.component';
import { IssbComponent } from './issb/issb.component';
import { FsbComponent } from './fsb/fsb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent,
    OffersComponent,
    BlogsComponent,
    PvtltdcompanyComponent,
    PubltdcompanyComponent,
    OneprsncompanyComponent,
    ParternshipfirmComponent,
    LimitedliaparternshipComponent,
    SoleproprietorshipComponent,
    GstregistrationComponent,
    GstcancellationComponent,
    GstmodificationComponent,
    GstreturnfillingComponent,
    IsocertificateComponent,
    MsmeregistrationComponent,
    FssairegistrationComponent,
    DigisigcertificateComponent,
    ShopregistrationComponent,
    PanComponent,
    TanComponent,
    IsbnComponent,
    NsicregistrationComponent,
    GemregistrationComponent,
    ReraregistrationComponent,
    BarcoderegistrationComponent,
    TrademarkComponent,
    CopyrightComponent,
    PatentComponent,
    TrademarkobjectrplyComponent,
    LogodesignComponent,
    DesignregistrationComponent,
    Iso9001Component,
    Iso14001Component,
    Iso22000Component,
    Iso27001Component,
    Iso50001Component,
    ImportexportcodeComponent,
    IecmodificationComponent,
    FieoregistrationComponent,
    ApedaregistrationComponent,
    LetterofundertakingComponent,
    IncometaxreturnComponent,
    GstreturnComponent,
    TdsreturnfillingComponent,
    BusinessplanprojectreportComponent,
    PfregistrationComponent,
    EsiregistrationComponent,
    LoginComponent,
    SignupComponent,
    PvtldtcompanyannualComponent,
    LimitedliapartershipannulComponent,
    Forminc22aannualComponent,
    Formdir3kycannualComponent,
    FooterComponent,
    ConsultComponent,
    BusinessvaluationComponent,
    CorporatefinanceComponent,
    QueryformComponent,
    ContactusComponent,
    CareerComponent,
    TermconditionComponent,
    PrivacypolicyComponent,
    RefundpolicyComponent,
    ConfidentialpolicyComponent,
    AdministratorpageComponent,
    SuspComponent,
    ScpComponent,
    BpcComponent,
    GsspComponent,
    GrapComponent,
    IssbComponent,
    FsbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
