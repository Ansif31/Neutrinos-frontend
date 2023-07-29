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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-UserAdd',
  templateUrl: './UserAdd.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class UserAddComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_EuHQWIsVKMGbpVCf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EuHQWIsVKMGbpVCf(bh) {
    try {
      bh = this.sd_i3PL9ragqwZzLv3s(bh);
      //appendnew_next_sd_EuHQWIsVKMGbpVCf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EuHQWIsVKMGbpVCf');
    }
  }

  userDetails(
    name: any = undefined,
    email: any = undefined,
    phone: any = undefined,
    admin: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { name: name, email: email, phone: phone, admin: admin };
      bh.local = {};

      bh = this.sd_pxhyiLmYJIr8MCsY(bh);
      //appendnew_next_userDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zdCIiPXU6E2NJGrB');
    }
  }

  submitCreateUser(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_T18Qc9F0AjYT7Txh(bh);
      //appendnew_next_submitCreateUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9qw5G9Ff4eAhHYok');
    }
  }

  popup(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_8CHZmzahXgLzWuxc(bh);
      //appendnew_next_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eESIRedzcRrJhApX');
    }
  }

  //appendnew_flow_UserAddComponent_start

  sd_i3PL9ragqwZzLv3s(bh) {
    try {
      this.page.body = undefined;

      bh = this.sd_j8KgsAGLi63Elclj(bh);
      //appendnew_next_sd_i3PL9ragqwZzLv3s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i3PL9ragqwZzLv3s');
    }
  }

  sd_j8KgsAGLi63Elclj(bh) {
    try {
      const page = this.page;
      page.body = {
        name: '',
        email: '',
        phone: '',
        admin: '',
      };

      //appendnew_next_sd_j8KgsAGLi63Elclj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j8KgsAGLi63Elclj');
    }
  }

  sd_pxhyiLmYJIr8MCsY(bh) {
    try {
      const page = this.page;
      page.body = bh.input;

      console.log(page.body);

      //appendnew_next_sd_pxhyiLmYJIr8MCsY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pxhyiLmYJIr8MCsY');
    }
  }

  sd_T18Qc9F0AjYT7Txh(bh) {
    try {
      const page = this.page;
      console.log(page.body);
      if (
        page.body.name &&
        page.body.email &&
        page.body.phone &&
        page.body.admin
      ) {
        bh.local.url = `${page.system.environment.properties.ssdURL}admin/create-user`;
      } else {
        // console.log(bh.error.error.error)
        page.modalHeading = 'Please enter all details';
        // page.modalContent = "Please enter correct details"
        page.show = true;
      }

      bh = this.sd_v7yPb6hMX6WrOCqC(bh);
      //appendnew_next_sd_T18Qc9F0AjYT7Txh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T18Qc9F0AjYT7Txh');
    }
  }

  async sd_v7yPb6hMX6WrOCqC(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_v7yPb6hMX6WrOCqC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v7yPb6hMX6WrOCqC');
    }
  }

  sd_r27f12z84t4vPecz(bh) {
    try {
      const page = this.page;
      console.log(bh.error.error.error);
      page.modalHeading = bh.error.error.error;
      page.modalContent = 'Please enter correct details';
      page.show = true;

      //appendnew_next_sd_r27f12z84t4vPecz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r27f12z84t4vPecz');
    }
  }

  sd_8CHZmzahXgLzWuxc(bh) {
    try {
      const page = this.page;
      page.show = false;

      //appendnew_next_sd_8CHZmzahXgLzWuxc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8CHZmzahXgLzWuxc');
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
      false ||
      this.sd_LUXmvJ3LjY2XM6Iq(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_LUXmvJ3LjY2XM6Iq(bh) {
    const catchConnectedNodes = ['sd_r27f12z84t4vPecz'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_r27f12z84t4vPecz(bh);
    //appendnew_next_sd_LUXmvJ3LjY2XM6Iq
    return true;
  }
  //appendnew_flow_UserAddComponent_Catch
}
