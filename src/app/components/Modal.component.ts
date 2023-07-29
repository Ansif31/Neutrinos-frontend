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
  selector: 'bh-Modal',
  templateUrl: './Modal.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ModalComponent {
  @Input('heading')
  public heading: any = undefined;
  @Input('content')
  public content: any = undefined;
  @Input('image')
  public image: any = undefined;
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
      this.sd_9T6EL8OvNLXEvV5H(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9T6EL8OvNLXEvV5H(bh) {
    try {
      bh = this.sd_dpCsTZNm4Ek9YGJA(bh);
      //appendnew_next_sd_9T6EL8OvNLXEvV5H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9T6EL8OvNLXEvV5H');
    }
  }

  //appendnew_flow_ModalComponent_start

  sd_dpCsTZNm4Ek9YGJA(bh) {
    try {
      bh = this.sd_VGX1KQwdbXY9RBKW(bh);
      //appendnew_next_sd_dpCsTZNm4Ek9YGJA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dpCsTZNm4Ek9YGJA');
    }
  }

  sd_VGX1KQwdbXY9RBKW(bh) {
    try {
      const page = this.page;
      page.data = {
        heading: bh.pageInput.heading,
        content: bh.pageInput.content,
        image: bh.pageInput.image,
      };

      //appendnew_next_sd_VGX1KQwdbXY9RBKW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VGX1KQwdbXY9RBKW');
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
  //appendnew_flow_ModalComponent_Catch
}
