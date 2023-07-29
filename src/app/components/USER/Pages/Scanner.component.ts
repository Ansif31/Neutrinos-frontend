/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Scanner',
  templateUrl: './Scanner.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ScannerComponent {
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
      this.sd_UN0HcKIdrLziWKgE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_UN0HcKIdrLziWKgE(bh) {
    try {
      bh = this.sd_QUU8y1G7qp4lM0CL(bh);
      //appendnew_next_sd_UN0HcKIdrLziWKgE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UN0HcKIdrLziWKgE');
    }
  }

  //appendnew_flow_ScannerComponent_start

  sd_QUU8y1G7qp4lM0CL(bh) {
    try {
      bh = this.sd_QrXWlMIE0EykFCru(bh);
      //appendnew_next_sd_QUU8y1G7qp4lM0CL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QUU8y1G7qp4lM0CL');
    }
  }

  sd_QrXWlMIE0EykFCru(bh) {
    try {
      const page = this.page;
      bh.local.url = `${page.system.environment.properties.ssdURL}claimed`;

      bh = this.sd_D3dOkJe5ua9cd4mQ(bh);
      //appendnew_next_sd_QrXWlMIE0EykFCru
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QrXWlMIE0EykFCru');
    }
  }

  async sd_D3dOkJe5ua9cd4mQ(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_slMUtqEffRBmmYJT(bh);
      //appendnew_next_sd_D3dOkJe5ua9cd4mQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_D3dOkJe5ua9cd4mQ');
    }
  }

  sd_slMUtqEffRBmmYJT(bh) {
    try {
      const page = this.page;
      page.claimed = bh.local?.result?.claimed;
      page.qrimage = bh.local?.result?.qrimage;

      //appendnew_next_sd_slMUtqEffRBmmYJT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_slMUtqEffRBmmYJT');
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
  //appendnew_flow_ScannerComponent_Catch
}
