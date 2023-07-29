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
import { Router } from '@angular/router'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-AdminHome',
  templateUrl: './AdminHome.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class AdminHomeComponent {
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
      this.sd_tpBTZsXFyhQFGC03(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_tpBTZsXFyhQFGC03(bh) {
    try {
      bh = this.sd_94vL25MR4If92NXJ(bh);
      //appendnew_next_sd_tpBTZsXFyhQFGC03
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tpBTZsXFyhQFGC03');
    }
  }

  scanning(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_uQ9WFYYPM7VjXZpZ(bh);
      //appendnew_next_scanning
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_960RvHV6m3GXTufo');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_eECk3BwruMcMAuK8(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hySR6l80boPFlyud');
    }
  }

  search(search: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { search: search };
      bh.local = {};

      bh = this.sd_Lh0J4bIRKFRQiHnj(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XEdC3nnV33Ofh6Dm');
    }
  }

  userAdd(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_oYFyhKX678gMcolX(bh);
      //appendnew_next_userAdd
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AqZRm8NphmqfMsag');
    }
  }

  closeModal(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_ELMHFJTvh4hrgqPF(bh);
      //appendnew_next_closeModal
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fPQAhaIKqhW1auVn');
    }
  }

  sd_yPYV1JLqgM6os9T9(value: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};

      bh = this.sd_I5Ay5C2wSyQFjZQ9(bh);
      //appendnew_next_sd_yPYV1JLqgM6os9T9
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yPYV1JLqgM6os9T9');
    }
  }

  //appendnew_flow_AdminHomeComponent_start

  sd_94vL25MR4If92NXJ(bh) {
    try {
      bh = this.sd_abEAh3Nl5KMeQoRP(bh);
      //appendnew_next_sd_94vL25MR4If92NXJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_94vL25MR4If92NXJ');
    }
  }

  sd_abEAh3Nl5KMeQoRP(bh) {
    try {
      const page = this.page;
      page.show = false;
      page.userAdd = false;

      bh.local.url = `${page.system.environment.properties.ssdURL}admin/users`;

      bh = this.sd_pkQhYQl8HiqjDKTt(bh);
      //appendnew_next_sd_abEAh3Nl5KMeQoRP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_abEAh3Nl5KMeQoRP');
    }
  }

  async sd_pkQhYQl8HiqjDKTt(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
        withCredentials: true,
      };
      bh.local.users = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_MfejlyYHugX1j3sl(bh);
      //appendnew_next_sd_pkQhYQl8HiqjDKTt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pkQhYQl8HiqjDKTt');
    }
  }

  sd_MfejlyYHugX1j3sl(bh) {
    try {
      const page = this.page;
      page.userData = bh.local.users.users;

      //appendnew_next_sd_MfejlyYHugX1j3sl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MfejlyYHugX1j3sl');
    }
  }

  sd_uQ9WFYYPM7VjXZpZ(bh) {
    try {
      const page = this.page;
      page.show = true;

      //appendnew_next_sd_uQ9WFYYPM7VjXZpZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uQ9WFYYPM7VjXZpZ');
    }
  }

  sd_eECk3BwruMcMAuK8(bh) {
    try {
      const page = this.page; // bh.sdService.OauthService.logout("/")

      bh.local.url = `${page.system.environment.properties.ssdURL}logout?redirectTo=http://localhost:4200/`;

      bh = this.sd_lYSTNL1MWKTdX0eI(bh);
      //appendnew_next_sd_eECk3BwruMcMAuK8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eECk3BwruMcMAuK8');
    }
  }

  async sd_lYSTNL1MWKTdX0eI(bh) {
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

      bh = this.sd_JoUTN3vJwubW5zg7(bh);
      //appendnew_next_sd_lYSTNL1MWKTdX0eI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lYSTNL1MWKTdX0eI');
    }
  }

  async sd_JoUTN3vJwubW5zg7(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_JoUTN3vJwubW5zg7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JoUTN3vJwubW5zg7');
    }
  }

  sd_Lh0J4bIRKFRQiHnj(bh) {
    try {
      const page = this.page;
      console.log(bh.input.search);

      bh.local.url = `${page.system.environment.properties.ssdURL}admin/users/${bh.input.search}`;

      bh = this.sd_LlOaVt46G9aUAZ5b(bh);
      //appendnew_next_sd_Lh0J4bIRKFRQiHnj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lh0J4bIRKFRQiHnj');
    }
  }

  async sd_LlOaVt46G9aUAZ5b(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
        withCredentials: true,
      };
      bh.local.users = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_lIc4Gcq4VahrDHXT(bh);
      //appendnew_next_sd_LlOaVt46G9aUAZ5b
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LlOaVt46G9aUAZ5b');
    }
  }

  sd_lIc4Gcq4VahrDHXT(bh) {
    try {
      const page = this.page;
      page.userData = bh.local?.users?.users;

      //appendnew_next_sd_lIc4Gcq4VahrDHXT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lIc4Gcq4VahrDHXT');
    }
  }

  sd_oYFyhKX678gMcolX(bh) {
    try {
      const page = this.page;
      page.userAdd = true;

      //appendnew_next_sd_oYFyhKX678gMcolX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oYFyhKX678gMcolX');
    }
  }

  sd_ELMHFJTvh4hrgqPF(bh) {
    try {
      const page = this.page;
      page.userAdd = false;
      page.show = false;

      //appendnew_next_sd_ELMHFJTvh4hrgqPF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ELMHFJTvh4hrgqPF');
    }
  }

  sd_I5Ay5C2wSyQFjZQ9(bh) {
    try {
      const page = this.page;
      page.userAdd = true;

      bh = this.sd_abEAh3Nl5KMeQoRP(bh);
      //appendnew_next_sd_I5Ay5C2wSyQFjZQ9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I5Ay5C2wSyQFjZQ9');
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
  //appendnew_flow_AdminHomeComponent_Catch
}
