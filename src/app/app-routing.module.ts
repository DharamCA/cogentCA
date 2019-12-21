import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApedaregistrationComponent } from './apedaregistration/apedaregistration.component';
import { BarcoderegistrationComponent } from './barcoderegistration/barcoderegistration.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BusinessplanprojectreportComponent } from './businessplanprojectreport/businessplanprojectreport.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { DesignregistrationComponent } from './designregistration/designregistration.component';
import { DigisigcertificateComponent } from './digisigcertificate/digisigcertificate.component';
import { EsiregistrationComponent } from './esiregistration/esiregistration.component';
import { FieoregistrationComponent } from './fieoregistration/fieoregistration.component';
import { FssairegistrationComponent } from './fssairegistration/fssairegistration.component';
import { GemregistrationComponent } from './gemregistration/gemregistration.component';
import { GstcancellationComponent } from './gstcancellation/gstcancellation.component';
import { GstmodificationComponent } from './gstmodification/gstmodification.component';
import { GstregistrationComponent } from './gstregistration/gstregistration.component';
import { GstreturnComponent } from './gstreturn/gstreturn.component';
import { GstreturnfillingComponent } from './gstreturnfilling/gstreturnfilling.component';
import { IecmodificationComponent } from './iecmodification/iecmodification.component';
import { ImportexportcodeComponent } from './importexportcode/importexportcode.component';
import { IncometaxreturnComponent } from './incometaxreturn/incometaxreturn.component';
import { IsbnComponent } from './isbn/isbn.component';
import { Iso9001Component } from './iso9001/iso9001.component';
import { Iso14001Component } from './iso14001/iso14001.component';
import { Iso22000Component } from './iso22000/iso22000.component';
import { Iso27001Component } from './iso27001/iso27001.component';
import { Iso50001Component } from './iso50001/iso50001.component';
import { IsocertificateComponent } from './isocertificate/isocertificate.component';
import { LetterofundertakingComponent } from './letterofundertaking/letterofundertaking.component';
import { LimitedliaparternshipComponent } from './limitedliaparternship/limitedliaparternship.component';
import { LogodesignComponent } from './logodesign/logodesign.component';
import { MsmeregistrationComponent } from './msmeregistration/msmeregistration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NsicregistrationComponent } from './nsicregistration/nsicregistration.component';
import { OffersComponent } from './offers/offers.component';
import { OneprsncompanyComponent } from './oneprsncompany/oneprsncompany.component';
import { PanComponent } from './pan/pan.component';
import { ParternshipfirmComponent } from './parternshipfirm/parternshipfirm.component';
import { PatentComponent } from './patent/patent.component';
import { PfregistrationComponent } from './pfregistration/pfregistration.component';
import { PubltdcompanyComponent } from './publtdcompany/publtdcompany.component';
import { PvtltdcompanyComponent } from './pvtltdcompany/pvtltdcompany.component';
import { ReraregistrationComponent } from './reraregistration/reraregistration.component';
import { ShopregistrationComponent } from './shopregistration/shopregistration.component';
import { SoleproprietorshipComponent } from './soleproprietorship/soleproprietorship.component';
import { TanComponent } from './tan/tan.component';
import { TdsreturnfillingComponent } from './tdsreturnfilling/tdsreturnfilling.component';
import { TrademarkComponent } from './trademark/trademark.component';
import { TrademarkobjectrplyComponent } from './trademarkobjectrply/trademarkobjectrply.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PvtldtcompanyannualComponent } from './pvtldtcompanyannual/pvtldtcompanyannual.component';
import { LimitedliapartershipannulComponent } from './limitedliapartershipannul/limitedliapartershipannul.component';
import { Forminc22aannualComponent } from './forminc22aannual/forminc22aannual.component';
import { Formdir3kycannualComponent } from './formdir3kycannual/formdir3kycannual.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultComponent } from './consult/consult.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'apedaregistration', component:ApedaregistrationComponent},
  {path:'barcoderegistration', component:BarcoderegistrationComponent},
  {path:'blogs', component:BlogsComponent},
  {path:'businessplanprojectreport', component:BusinessplanprojectreportComponent},
  {path:'copyright', component:CopyrightComponent},
  {path:'designregistration', component:DesignregistrationComponent},
  {path:'digisigcertificate', component:DigisigcertificateComponent},
  {path:'esiregistration', component:EsiregistrationComponent},
  {path:'fieoregistration', component:FieoregistrationComponent},
  {path:'fssairegistration', component:FssairegistrationComponent},
  {path:'gemregistration', component:GemregistrationComponent},
  {path:'gstcancellation', component:GstcancellationComponent},
  {path:'gstmodification', component:GstmodificationComponent},
  {path:'gstregistration', component:GstregistrationComponent},
  {path:'gstreturn', component:GstreturnComponent},
  {path:'gstreturnfilling', component:GstreturnfillingComponent},
  {path:'iecmodification', component:IecmodificationComponent},
  {path:'importexportcode', component:ImportexportcodeComponent},
  {path:'incometaxreturn', component:IncometaxreturnComponent},
  {path:'isbn', component:IsbnComponent},
  {path:'iso9001', component:Iso9001Component},
  {path:'iso14001', component:Iso14001Component},
  {path:'iso22000', component:Iso22000Component},
  {path:'iso27001', component:Iso27001Component},
  {path:'iso50001', component:Iso50001Component},
  {path:'isocertificate', component:IsocertificateComponent},
  {path:'letterofundertaking', component:LetterofundertakingComponent},
  {path:'limitedliaparternship', component:LimitedliaparternshipComponent},
  {path:'logodesign', component:LogodesignComponent},
  {path:'msmeregistration', component:MsmeregistrationComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'nsicregistration', component:NsicregistrationComponent},
  {path:'offers', component:OffersComponent},
  {path:'oneprsncompant', component:OneprsncompanyComponent},
  {path:'pan', component:PanComponent},
  {path:'parternshipfirm', component:ParternshipfirmComponent},
  {path:'patent', component:PatentComponent},
  {path:'pfregistration', component:PfregistrationComponent},
  {path:'publtdcompany', component:PubltdcompanyComponent},
  {path:'pvtltdcompany', component:PvtltdcompanyComponent},
  {path:'reraregistration', component:ReraregistrationComponent},
  {path:'shopregistration', component:ShopregistrationComponent},
  {path:'soleproprietorship', component:SoleproprietorshipComponent},
  {path:'tan', component:TanComponent},
  {path:'tdsreturnfilling', component:TdsreturnfillingComponent},
  {path:'trademark', component:TrademarkComponent},
  {path:'trademarkobjectrply', component:TrademarkobjectrplyComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'pvtltdcompanyannual', component:PvtldtcompanyannualComponent},
  {path:'limitedliapartershipannul', component:LimitedliapartershipannulComponent},
  {path:'forminc22aannual', component:Forminc22aannualComponent},
  {path:'formdir3kycannual', component:Formdir3kycannualComponent},
  {path:'footer', component:FooterComponent},
  {path:'consult', component:ConsultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
