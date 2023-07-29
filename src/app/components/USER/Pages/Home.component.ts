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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeComponent {
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
      this.sd_ln8vG6b356vklbfz(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ln8vG6b356vklbfz(bh) {
    try {
      bh = this.sd_XaEmeW7BR66hxfd3(bh);
      //appendnew_next_sd_ln8vG6b356vklbfz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ln8vG6b356vklbfz');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_7B1dAbMAVRkhLrCt(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P7ttPGXEUI2Thren');
    }
  }

  noti(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Oja9AkePdvwIbazi(bh);
      //appendnew_next_noti
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dnj78qd2Awh74zI1');
    }
  }

  scanning(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_659YW5wg2DmT6O0e(bh);
      //appendnew_next_scanning
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QUcsgU7HA4MZqSoJ');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_XaEmeW7BR66hxfd3(bh) {
    try {
      bh = this.sd_pYd3XuC9dUcS0azf(bh);
      //appendnew_next_sd_XaEmeW7BR66hxfd3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XaEmeW7BR66hxfd3');
    }
  }

  sd_pYd3XuC9dUcS0azf(bh) {
    try {
      const page = this.page;
      page.show = false;
      bh.local.url = `${page.system.environment.properties.ssdURL}events`;

      // page.user = bh.sdService.OauthService.userInfo

      bh = this.sd_utJYAHjuRvkfaKVg(bh);
      //appendnew_next_sd_pYd3XuC9dUcS0azf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pYd3XuC9dUcS0azf');
    }
  }

  async sd_utJYAHjuRvkfaKVg(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.events = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_Feepnl7U4rmkRjMS(bh);
      //appendnew_next_sd_utJYAHjuRvkfaKVg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_utJYAHjuRvkfaKVg');
    }
  }

  sd_Feepnl7U4rmkRjMS(bh) {
    try {
      const page = this.page;
      page.data = bh.local.events.events;

      page.user = bh.sdService.OauthService.userInfo;

      bh = this.sd_Z41rqNEeHS7tKu68(bh);
      //appendnew_next_sd_Feepnl7U4rmkRjMS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Feepnl7U4rmkRjMS');
    }
  }

  sd_Z41rqNEeHS7tKu68(bh) {
    try {
      let outputVariables = this.noti();

      //appendnew_next_sd_Z41rqNEeHS7tKu68
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z41rqNEeHS7tKu68');
    }
  }

  sd_7B1dAbMAVRkhLrCt(bh) {
    try {
      const page = this.page; // bh.sdService.OauthService.logout("/")

      bh.local.url = `${page.system.environment.properties.ssdURL}logout?redirectTo=http://localhost:4200/`;

      bh = this.sd_mTKNoOGHGzXv8gEi(bh);
      //appendnew_next_sd_7B1dAbMAVRkhLrCt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7B1dAbMAVRkhLrCt');
    }
  }

  async sd_mTKNoOGHGzXv8gEi(bh) {
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

      bh = this.sd_NCmpX40zaUek13zq(bh);
      //appendnew_next_sd_mTKNoOGHGzXv8gEi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mTKNoOGHGzXv8gEi');
    }
  }

  async sd_NCmpX40zaUek13zq(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_NCmpX40zaUek13zq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NCmpX40zaUek13zq');
    }
  }

  sd_Oja9AkePdvwIbazi(bh) {
    try {
      const page = this.page;
      Notification.requestPermission().then((perm) => {
        if (perm == 'granted') {
          new Notification('Neutrinos', {
            body: 'Welcome to Neutriverse Application',
            icon: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1690022337/Frame_6_psrbmb.png',
          });
        }
      });

      //appendnew_next_sd_Oja9AkePdvwIbazi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Oja9AkePdvwIbazi');
    }
  }

  sd_659YW5wg2DmT6O0e(bh) {
    try {
      const page = this.page;
      if (page.show === false) {
        page.show = true;
      } else {
        page.show = false;
      }

      //appendnew_next_sd_659YW5wg2DmT6O0e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_659YW5wg2DmT6O0e');
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
  //appendnew_flow_HomeComponent_Catch
}
