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
import { webcamService } from '../services/webcam/webcam.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-test',
  templateUrl: './test.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class testComponent {
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
      this.sd_fs4Fqm9WuPKokIKD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  noti(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_lDY4Z5iKoP6Zetbs(bh);
      //appendnew_next_noti
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oDcWg4gn7WDnEFgG');
    }
  }

  sd_fs4Fqm9WuPKokIKD(bh) {
    try {
      bh = this.sd_0Y3IEIpREz4ZoYps(bh);
      //appendnew_next_sd_fs4Fqm9WuPKokIKD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fs4Fqm9WuPKokIKD');
    }
  }

  //appendnew_flow_testComponent_start

  sd_lDY4Z5iKoP6Zetbs(bh) {
    try {
      const page = this.page;
      Notification.requestPermission().then((perm) => {
        if (perm == 'granted') {
          new Notification('Example notification');
        }
      });

      //appendnew_next_sd_lDY4Z5iKoP6Zetbs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lDY4Z5iKoP6Zetbs');
    }
  }

  sd_0Y3IEIpREz4ZoYps(bh) {
    try {
      bh = this.sd_nJ7gsajXlDhbZwmy(bh);
      //appendnew_next_sd_0Y3IEIpREz4ZoYps
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Y3IEIpREz4ZoYps');
    }
  }

  sd_nJ7gsajXlDhbZwmy(bh) {
    try {
      bh.local.webcamService = webcamService;

      bh = this.sd_xX2cx56FekWNj6rM(bh);
      //appendnew_next_sd_nJ7gsajXlDhbZwmy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nJ7gsajXlDhbZwmy');
    }
  }

  sd_xX2cx56FekWNj6rM(bh) {
    try {
      const page = this.page;
      page.instance = new bh.local.webcamService();

      console.log(page.instance);
      page.show = true;

      //appendnew_next_sd_xX2cx56FekWNj6rM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xX2cx56FekWNj6rM');
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
  //appendnew_flow_testComponent_Catch
}
