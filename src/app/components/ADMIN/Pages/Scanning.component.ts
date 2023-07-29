/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Scanning',
  templateUrl: './Scanning.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ScanningComponent {
  @Output('changes')
  public changes: any = new EventEmitter<any>();
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_8qndyoIOYn7ONISi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8qndyoIOYn7ONISi(bh) {
    try {
      bh = this.sd_XwchB62mshL0kPwW(bh);
      //appendnew_next_sd_8qndyoIOYn7ONISi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8qndyoIOYn7ONISi');
    }
  }

  scannedData(scannedId: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { scannedId: scannedId };
      bh.local = {};

      bh = this.sd_ikEwh8H3chiijIjx(bh);
      //appendnew_next_scannedData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vxOddrDMeedf23uc');
    }
  }

  sd_d8pg7O7E8ub9nUFv(changes: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { changes: changes };
      bh.local = {};

      bh = this.sd_PLBd89U9VW3jGxYv(bh);
      //appendnew_next_sd_d8pg7O7E8ub9nUFv
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d8pg7O7E8ub9nUFv');
    }
  }

  //appendnew_flow_ScanningComponent_start

  sd_XwchB62mshL0kPwW(bh) {
    try {
      this.page.output = this.page.output;
      this.page.scannedId = 'nothing';

      bh = this.sd_CVgMnQJ5YPgCY1GZ(bh);
      //appendnew_next_sd_XwchB62mshL0kPwW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XwchB62mshL0kPwW');
    }
  }

  sd_CVgMnQJ5YPgCY1GZ(bh) {
    try {
      const page = this.page;
      page.show = false;

      //appendnew_next_sd_CVgMnQJ5YPgCY1GZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CVgMnQJ5YPgCY1GZ');
    }
  }

  sd_ikEwh8H3chiijIjx(bh) {
    try {
      const page = this.page;
      page.scannedId = bh.input.scannedId;

      bh.local.url = `${page.system.environment.properties.ssdURL}admin/user`;
      bh.local.body = { email: page.scannedId };
      console.log(page.scannedId);

      bh = this.sd_PBSaisSsbODMI2vM(bh);
      //appendnew_next_sd_ikEwh8H3chiijIjx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ikEwh8H3chiijIjx');
    }
  }

  async sd_PBSaisSsbODMI2vM(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
        withCredentials: true,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_ggeDKr0z3fk6znhr(bh);
      //appendnew_next_sd_PBSaisSsbODMI2vM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PBSaisSsbODMI2vM');
    }
  }

  sd_ggeDKr0z3fk6znhr(bh) {
    try {
      if (
        this.sdService.operators['neq'](
          this.page.scannedId,
          'nothing',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_3XfLXzLR0Xhzuk2X(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ggeDKr0z3fk6znhr');
    }
  }

  sd_3XfLXzLR0Xhzuk2X(bh) {
    try {
      const page = this.page;
      page.user = bh?.local?.result?.user;
      if (page?.user) {
        page.size = {
          hoodiesize: page?.user?.hoodiesize,
          tshirtsize: page?.user?.tshirtsize,
        };
        page.show = true;
        page.goodies = true;
      } else {
      }
      console.log(page.size);

      //appendnew_next_sd_3XfLXzLR0Xhzuk2X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3XfLXzLR0Xhzuk2X');
    }
  }

  sd_PLBd89U9VW3jGxYv(bh) {
    try {
      bh.pageOutput.changes.emit(bh.input.changes);

      //appendnew_next_sd_PLBd89U9VW3jGxYv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PLBd89U9VW3jGxYv');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_ScanningComponent_Catch
}
