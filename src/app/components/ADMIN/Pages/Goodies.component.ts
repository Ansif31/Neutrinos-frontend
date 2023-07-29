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
//append_imports_end

@Component({
  selector: 'bh-Goodies',
  templateUrl: './Goodies.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class GoodiesComponent {
  @Input('hoodiesize')
  public hoodiesize: any = undefined;
  @Input('tshirtsize')
  public tshirtsize: any = undefined;
  @Input('userEmail')
  public userEmail: any = undefined;
  @Output('changeValue')
  public changeValue: any = new EventEmitter<any>();
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
      this.sd_E2lO9DAIkUwtbo14(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_E2lO9DAIkUwtbo14(bh) {
    try {
      bh = this.sd_pTtUBPgUJDA9Ysmp(bh);
      //appendnew_next_sd_E2lO9DAIkUwtbo14
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E2lO9DAIkUwtbo14');
    }
  }

  markedAsClaimed(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Xz7vI7Rq6ImGMjtP(bh);
      //appendnew_next_markedAsClaimed
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xjQ5WdEcjD0deBH9');
    }
  }

  modal(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_jyDrHR5pgjiqCqUG(bh);
      //appendnew_next_modal
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SQUIOCCQVMPenIte');
    }
  }

  //appendnew_flow_GoodiesComponent_start

  sd_pTtUBPgUJDA9Ysmp(bh) {
    try {
      this.page.hoodiesize = bh.pageInput.hoodiesize;
      this.page.tshirtsize = bh.pageInput.tshirtsize;
      this.page.userEmail = bh.pageInput.userEmail;

      bh = this.sd_1pKj4LaLFGIQW1DE(bh);
      //appendnew_next_sd_pTtUBPgUJDA9Ysmp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pTtUBPgUJDA9Ysmp');
    }
  }

  sd_1pKj4LaLFGIQW1DE(bh) {
    try {
      const page = this.page;
      page.modal = false;

      //appendnew_next_sd_1pKj4LaLFGIQW1DE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1pKj4LaLFGIQW1DE');
    }
  }

  sd_Xz7vI7Rq6ImGMjtP(bh) {
    try {
      const page = this.page;
      bh.local.url = `${page.system.environment.properties.ssdURL}admin/claimed`;

      bh.local.body = {
        email: page.userEmail,
      };

      bh = this.sd_Jjf3IHT2kFKdDJuH(bh);
      //appendnew_next_sd_Xz7vI7Rq6ImGMjtP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xz7vI7Rq6ImGMjtP');
    }
  }

  async sd_Jjf3IHT2kFKdDJuH(bh) {
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

      bh = this.sd_SPMzYYfs0nzOKNO1(bh);
      //appendnew_next_sd_Jjf3IHT2kFKdDJuH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Jjf3IHT2kFKdDJuH');
    }
  }

  sd_SPMzYYfs0nzOKNO1(bh) {
    try {
      const page = this.page;
      if (bh.local.result.message === 'Claimed') {
        page.modalHeading = 'Succesfully claimed';
        page.modalContent = 'Please collect your goodies';
        page.modalImage = false;
        page.modal = true;
      }

      bh.params = {
        email: page.userEmail,
      };

      page.changeValue = true;

      bh = this.sd_ex9gBwdPZsSEvkEH(bh);
      bh = this.sd_UFFsWvunci6lDXeK(bh);
      //appendnew_next_sd_SPMzYYfs0nzOKNO1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SPMzYYfs0nzOKNO1');
    }
  }

  sd_ex9gBwdPZsSEvkEH(bh) {
    try {
      bh.pageOutput.changeValue.emit(this.page.changeValue);

      //appendnew_next_sd_ex9gBwdPZsSEvkEH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ex9gBwdPZsSEvkEH');
    }
  }

  async sd_UFFsWvunci6lDXeK(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin/camera');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.params),
        });

      //appendnew_next_sd_UFFsWvunci6lDXeK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UFFsWvunci6lDXeK');
    }
  }

  sd_qL7fFoqsGvgZ1hZX(bh) {
    try {
      const page = this.page;
      page.modalHeading = 'Already claimed';
      page.modalContent = 'Please check the excel sheet';
      page.modalImage = true;
      page.modal = true;
      console.log(page.modal);

      //appendnew_next_sd_qL7fFoqsGvgZ1hZX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qL7fFoqsGvgZ1hZX');
    }
  }

  sd_jyDrHR5pgjiqCqUG(bh) {
    try {
      const page = this.page;
      if (page.modal === false) {
        page.modal = true;
      } else {
        page.modal = false;
      }

      //appendnew_next_sd_jyDrHR5pgjiqCqUG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jyDrHR5pgjiqCqUG');
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
      this.sd_ai95Awwu96tcM086(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_ai95Awwu96tcM086(bh) {
    const catchConnectedNodes = ['sd_qL7fFoqsGvgZ1hZX'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_qL7fFoqsGvgZ1hZX(bh);
    //appendnew_next_sd_ai95Awwu96tcM086
    return true;
  }
  //appendnew_flow_GoodiesComponent_Catch
}
