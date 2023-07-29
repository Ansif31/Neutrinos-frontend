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
import { webcamService } from '../../../services/webcam/webcam.service'; //_splitter_
import { Router, ActivatedRoute } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-camera',
  templateUrl: './camera.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class cameraComponent {
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
      this.sd_XcoG3zQcpKxsuWoI(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    const routesd_LGkBpmsxEIvjc4KRInstance =
      this.__page_injector__.get(ActivatedRoute);
    this.page._route_sd_LGkBpmsxEIvjc4KR =
      routesd_LGkBpmsxEIvjc4KRInstance.queryParams.subscribe((event: any) => {
        let bh = this.sdService.__constructDefault({});
        bh.local.params = event;
        this.sd_LGkBpmsxEIvjc4KR(bh);
      });
    //append_listeners
  }

  sd_XcoG3zQcpKxsuWoI(bh) {
    try {
      bh = this.sd_VmE66VjGh9IRXPKc(bh);
      //appendnew_next_sd_XcoG3zQcpKxsuWoI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XcoG3zQcpKxsuWoI');
    }
  }

  uploadphoto(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Q4OsnbGLSb64X7t6(bh);
      //appendnew_next_uploadphoto
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KYVAfyN869fCpDNC');
    }
  }

  sd_LGkBpmsxEIvjc4KR(bh) {
    try {
      bh = this.sd_5LIHePuTiwjkqMzJ(bh);
      //appendnew_next_sd_LGkBpmsxEIvjc4KR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LGkBpmsxEIvjc4KR');
    }
  }

  //appendnew_flow_cameraComponent_start

  sd_VmE66VjGh9IRXPKc(bh) {
    try {
      bh = this.sd_T2nrLFAE62GKBLdk(bh);
      //appendnew_next_sd_VmE66VjGh9IRXPKc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VmE66VjGh9IRXPKc');
    }
  }

  sd_T2nrLFAE62GKBLdk(bh) {
    try {
      bh.local.webcamService = webcamService;

      bh = this.sd_8On8i15IBw6F5cBj(bh);
      //appendnew_next_sd_T2nrLFAE62GKBLdk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T2nrLFAE62GKBLdk');
    }
  }

  sd_8On8i15IBw6F5cBj(bh) {
    try {
      const page = this.page;
      page.instance = new bh.local.webcamService();

      console.log(page.instance);
      page.show = true;

      //appendnew_next_sd_8On8i15IBw6F5cBj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8On8i15IBw6F5cBj');
    }
  }

  sd_Q4OsnbGLSb64X7t6(bh) {
    try {
      const page = this.page;
      bh.local.url = `${page.system.environment.properties.ssdURL}admin/photo`;

      bh.local.body = {
        file: page.instance.pictureTaken,
        email: page.email,
      };

      bh = this.sd_5gWAtYlm5xFPczSM(bh);
      //appendnew_next_sd_Q4OsnbGLSb64X7t6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q4OsnbGLSb64X7t6');
    }
  }

  async sd_5gWAtYlm5xFPczSM(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_dWTXdUFgHeCkmN3r(bh);
      //appendnew_next_sd_5gWAtYlm5xFPczSM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5gWAtYlm5xFPczSM');
    }
  }

  sd_dWTXdUFgHeCkmN3r(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.local.result.message,
          'upload successfully',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_TFk3C5nKTkQBMhCL(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dWTXdUFgHeCkmN3r');
    }
  }

  async sd_TFk3C5nKTkQBMhCL(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_TFk3C5nKTkQBMhCL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TFk3C5nKTkQBMhCL');
    }
  }

  sd_5LIHePuTiwjkqMzJ(bh) {
    try {
      const page = this.page;
      page.email = bh.local.params.email;

      console.log(page.email);

      //appendnew_next_sd_5LIHePuTiwjkqMzJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5LIHePuTiwjkqMzJ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const _route_sd_LGkBpmsxEIvjc4KR = this.page._route_sd_LGkBpmsxEIvjc4KR;
      if (
        _route_sd_LGkBpmsxEIvjc4KR &&
        typeof _route_sd_LGkBpmsxEIvjc4KR.unsubscribe === 'function'
      ) {
        _route_sd_LGkBpmsxEIvjc4KR.unsubscribe();
      }
    }
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
  //appendnew_flow_cameraComponent_Catch
}
