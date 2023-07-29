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
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-UploadImage',
  templateUrl: './UploadImage.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class UploadImageComponent {
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
      this.sd_fW2g5pJ93wXbk5PS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_fW2g5pJ93wXbk5PS(bh) {
    try {
      bh = this.sd_mIAkIwhwcdPLROIx(bh);
      //appendnew_next_sd_fW2g5pJ93wXbk5PS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fW2g5pJ93wXbk5PS');
    }
  }

  //appendnew_flow_UploadImageComponent_start

  sd_mIAkIwhwcdPLROIx(bh) {
    try {
      bh = this.sd_iGQREQL0frsm67fW(bh);
      //appendnew_next_sd_mIAkIwhwcdPLROIx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mIAkIwhwcdPLROIx');
    }
  }

  sd_iGQREQL0frsm67fW(bh) {
    try {
      bh.input.webcamimage = WebcamImage;
      bh.input.webcaminiterror = WebcamInitError;
      bh.input.webcamutil = WebcamUtil;

      bh = this.sd_QZjZ3u8Yz5XaHs29(bh);
      //appendnew_next_sd_iGQREQL0frsm67fW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iGQREQL0frsm67fW');
    }
  }

  sd_QZjZ3u8Yz5XaHs29(bh) {
    try {
      const page = this.page;
      page.showWebcam = true;
      page.allowCameraSwitch = true;
      page.multipleWebcamsAvailable = false;
      page.deviceId = '';
      page.errors = [];

      // Latest snapshot
      page.webcamImage = null;

      //appendnew_next_sd_QZjZ3u8Yz5XaHs29
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QZjZ3u8Yz5XaHs29');
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
  //appendnew_flow_UploadImageComponent_Catch
}
