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
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { Router, ActivatedRoute } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-AuthLayout',
  templateUrl: './AuthLayout.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class AuthLayoutComponent {
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
      this.sd_cHGCV5AcoXD5dSoc(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    const routesd_WQEqroXOae6w1XSCInstance =
      this.__page_injector__.get(ActivatedRoute);
    this.page._route_sd_WQEqroXOae6w1XSC =
      routesd_WQEqroXOae6w1XSCInstance.queryParams.subscribe((event: any) => {
        let bh = this.sdService.__constructDefault({});
        bh.input.params = event;
        this.sd_WQEqroXOae6w1XSC(bh);
      });

    //append_listeners
  }

  sd_cHGCV5AcoXD5dSoc(bh) {
    try {
      bh = this.sd_DIgXHKwjWrS1Nz2i(bh);
      //appendnew_next_sd_cHGCV5AcoXD5dSoc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cHGCV5AcoXD5dSoc');
    }
  }

  handleInputs(
    index = 0,
    prevInput: any = undefined,
    currentInput: any = undefined,
    nextInput: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {
        index: index,
        prevInput: prevInput,
        currentInput: currentInput,
        nextInput: nextInput,
      };
      bh.local = {};

      bh = this.sd_priyJbKwwyQO8khS(bh);
      //appendnew_next_handleInputs
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4nA4ifG5L38KyPG3');
    }
  }

  submit(value: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};

      bh = this.sd_WNPYopuzPKBqFmgQ(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7XehkSaEIm9FxmRH');
    }
  }

  buttonSwap(buttonName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { buttonName: buttonName };
      bh.local = {};

      bh = this.sd_UHPleS5AsSrEOlJK(bh);
      //appendnew_next_buttonSwap
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NAaK24Y212FbDdV4');
    }
  }

  values(
    email: any = undefined,
    name: any = undefined,
    phone: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { email: email, name: name, phone: phone };
      bh.local = {};

      bh = this.sd_E1KRwv3MQEwSZihJ(bh);
      //appendnew_next_values
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jZ1czdOmdGSUZmaP');
    }
  }

  popup(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Mp9nUCmjqa1Qm9nO(bh);
      //appendnew_next_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TEVBwnRHR9fADGfh');
    }
  }

  sd_WQEqroXOae6w1XSC(bh) {
    try {
      bh = this.sd_g7mLaCIRmki2ubZ0(bh);
      //appendnew_next_sd_WQEqroXOae6w1XSC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WQEqroXOae6w1XSC');
    }
  }

  viahelp(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_cuKIqD7TNgcYX9Io(bh);
      //appendnew_next_viahelp
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IhgeNUNbXRSro0C7');
    }
  }

  onKeyDown(event: any = undefined, nextInputId: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event, nextInputId: nextInputId };
      bh.local = {};

      bh = this.sd_TXhaRMQXXnauOPir(bh);
      //appendnew_next_onKeyDown
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BwbJx2xvrTPCFA5s');
    }
  }

  focus(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_CuybTE5oFJdOBaPP(bh);
      //appendnew_next_focus
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C4AsKtZTAEq6AkZc');
    }
  }

  onInputEntered(nextInputId: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { nextInputId: nextInputId };
      bh.local = {};

      bh = this.sd_SdXWG3cSnAve7QiY(bh);
      //appendnew_next_onInputEntered
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FkeNB9huZLOHsAtT');
    }
  }

  onBackspaceKeyDown(
    prevInputId: any = undefined,
    event: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { prevInputId: prevInputId, event: event };
      bh.local = {};

      bh = this.sd_lVekG2n5pFYphqOv(bh);
      //appendnew_next_onBackspaceKeyDown
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pMf8VvCbP7sJtn3X');
    }
  }

  onInputChange(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Qjw0gGHiMZmXhl3b(bh);
      //appendnew_next_onInputChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6tpVYp3QLUeBgTVi');
    }
  }

  //appendnew_flow_AuthLayoutComponent_start

  sd_DIgXHKwjWrS1Nz2i(bh) {
    try {
      const page = this.page;

      page.animate = false;

      page.otpInput;

      page.loading = false;

      // page.userInput= new bh.local.form
      console.log(page);

      page.timerDisplay = '02:00';

      const twoMinutes = 2 * 60;
      let timer = twoMinutes;

      const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        page.timerDisplay = `${minutes < 10 ? '0' : ''}${minutes}:${
          seconds < 10 ? '0' : ''
        }${seconds}`;

        if (--timer < 0) {
          // Timer has reached zero, you can add your logic here
          // For example, alert("Time's up!");
          page.clickotp = true;
          clearInterval(interval);
        }
      }, 1000);

      bh = this.sd_3qi7xRbFNGNilTdo(bh);
      //appendnew_next_sd_DIgXHKwjWrS1Nz2i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DIgXHKwjWrS1Nz2i');
    }
  }

  sd_3qi7xRbFNGNilTdo(bh) {
    try {
      bh = this.sd_nNRrnTIqACeCe8Dv(bh);
      //appendnew_next_sd_3qi7xRbFNGNilTdo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3qi7xRbFNGNilTdo');
    }
  }

  sd_nNRrnTIqACeCe8Dv(bh) {
    try {
      const page = this.page;
      page.count = 0;

      bh = this.sd_2zWymGhdK6JSYY5S(bh);
      //appendnew_next_sd_nNRrnTIqACeCe8Dv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nNRrnTIqACeCe8Dv');
    }
  }

  sd_2zWymGhdK6JSYY5S(bh) {
    try {
      const page = this.page;
      page.data = [
        {
          inputs: [
            {
              placeholder: '',
              label: 'Name',
              icon: '',
              value: 'name',
            },
            {
              placeholder: '',
              label: 'Email',
              icon: '',
              value: 'email',
            },
            {
              placeholder: '',
              label: 'Phone',
              icon: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1689918819/IN_hj6jhs.png',
              value: 'phone',
            },
          ],
          buttons: [
            {
              name: 'Sign in Now',
              icon: '',
            },
            {
              name: 'Sign in with IDS',
              icon: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1689918234/Frame_3_aule1z.png',
            },
          ],
          hyperlink: 'Sign up here <a>via help?</a>',
        },
        {
          heading1: 'Verification',
          heading2: 'We have sent code to your email address',
          inputs: [],
          buttons: [],
          otp: true,
          hyperlink: "Didn't receive link? <a>Resend</a>",
        },
      ];

      bh = this.sd_a8iOETTJzQMjoWPI(bh);
      //appendnew_next_sd_2zWymGhdK6JSYY5S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2zWymGhdK6JSYY5S');
    }
  }

  sd_a8iOETTJzQMjoWPI(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;

      bh = this.sd_ojETVDHOALapnfdN(bh);
      //appendnew_next_sd_a8iOETTJzQMjoWPI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a8iOETTJzQMjoWPI');
    }
  }

  sd_ojETVDHOALapnfdN(bh) {
    try {
      const page = this.page; // page.addRegisterForm = new page.formGroup({
      //     // otp : new page.formControl("",[page.validator.required],),

      // })

      page.userInput = new page.formControl('', [
        page.validator.required,
        page.validator.minLength(6),
        page.validator.maxLength(6),
        page.validator.pattern('^[0-9]+$'),
      ]);

      //appendnew_next_sd_ojETVDHOALapnfdN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ojETVDHOALapnfdN');
    }
  }

  sd_priyJbKwwyQO8khS(bh) {
    try {
      const page = this.page;
      if (bh.input.index == 1) {
        const value = bh.input.currentInput.value;
        page.otp[bh.input.index - 1] = value;

        if (value) {
          bh.input.nextInput.focus();
        } else {
          bh.input.currentInput.focus();
        }
      } else if (bh.input?.prevInput?.value) {
        const value = bh.input.currentInput.value;
        page.otp[bh.input.index - 1] = value;

        if (value) {
          bh.input.nextInput.focus();
        } else {
          bh.input.currentInput.focus();
        }
      } else {
        bh.input.currentInput.value = null;
        bh.input.prevInput.focus();
      }

      //appendnew_next_sd_priyJbKwwyQO8khS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_priyJbKwwyQO8khS');
    }
  }

  sd_WNPYopuzPKBqFmgQ(bh) {
    try {
      const page = this.page; // page.flagotp = false;
      // if (bh?.input?.prevInput?.value) {
      //     const value = bh.input.currentInput.value;
      //     page.otp[bh.input.index - 1] = value;
      //     page.result = page.otp.join("");
      //     page.flagotp = true;
      //     bh.local.url = `${page.system.environment.properties.ssdURL}otp`;
      //     bh.local.body = {
      //         email:page.email,
      //         otp:page.result
      //     }
      // } else {
      //     bh.input.currentInput.value = null
      //     bh.input.prevInput.focus()
      // }

      // console.log(page.result)
      page.flagotp = false;
      page.error = false;
      if (bh.input.value.length === 6) {
        page.error = false;
        page.flagotp = true;
      } else {
        page.modalContent = "OTP shouldn't be greater or lesser than 6 digits";
        page.error = true;
      }

      // {
      //     page.modalHeading = "Invalid OTP"
      //     page.modalContent = "OTP shouldn't be greater or lesser than 6 digits"
      //     page.modalImage = false
      //     page.show = true;
      // }
      bh.local.url = `${page.system.environment.properties.ssdURL}otp`;
      bh.local.body = {
        email: page.email,
        otp: bh.input.value,
      };

      page.otpCode = bh.local.body.otp;
      console.log(page.otpCode);

      bh = this.sd_wDNxzPPq2uIaOG7J(bh);
      //appendnew_next_sd_WNPYopuzPKBqFmgQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WNPYopuzPKBqFmgQ');
    }
  }

  sd_wDNxzPPq2uIaOG7J(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.flagotp,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_A2qvEPsmQZKhb5kf(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wDNxzPPq2uIaOG7J');
    }
  }

  async sd_A2qvEPsmQZKhb5kf(bh) {
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

      bh = this.sd_e9NbxnDPUjUnugfc(bh);
      //appendnew_next_sd_A2qvEPsmQZKhb5kf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A2qvEPsmQZKhb5kf');
    }
  }

  sd_e9NbxnDPUjUnugfc(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.local.result.message,
          'Email verification completed',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_lenSWk0Ax2lGybuO(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e9NbxnDPUjUnugfc');
    }
  }

  async sd_lenSWk0Ax2lGybuO(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/user/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_lenSWk0Ax2lGybuO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lenSWk0Ax2lGybuO');
    }
  }

  sd_UHPleS5AsSrEOlJK(bh) {
    try {
      const page = this.page;
      page.animate = true;
      if (bh.input.buttonName == 'Sign in Now') {
        bh.local.signin = true;
        bh.local.url = `${page.system.environment.properties.ssdURL}login`;

        bh.local.body = {
          email: page.email,
          name: page.name,
          phone: page.phone,
        };
      } else {
        bh.local.signin = false;

        bh.sdService.OauthService.login('/user/home');
      }

      console.log(bh.local.signin);

      bh = this.sd_WraVQMkkUavrORBK(bh);
      //appendnew_next_sd_UHPleS5AsSrEOlJK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UHPleS5AsSrEOlJK');
    }
  }

  sd_WraVQMkkUavrORBK(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.signin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_EJLP9hQEBa6Oj4fv(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WraVQMkkUavrORBK');
    }
  }

  sd_EJLP9hQEBa6Oj4fv(bh) {
    try {
      const page = this.page;
      if (page.show === false) {
        page.loading = true;
      }

      bh = this.sd_YLKaNpFyxb84gEb5(bh);
      //appendnew_next_sd_EJLP9hQEBa6Oj4fv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EJLP9hQEBa6Oj4fv');
    }
  }

  async sd_YLKaNpFyxb84gEb5(bh) {
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

      bh = this.sd_xQ87KBqChQcJdRV1(bh);
      //appendnew_next_sd_YLKaNpFyxb84gEb5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YLKaNpFyxb84gEb5');
    }
  }

  sd_xQ87KBqChQcJdRV1(bh) {
    try {
      const page = this.page;
      if (
        bh.local.result.message === 'Otp Send Successfully' &&
        !page.otpOnly
      ) {
        page.loading = false;
        page.count++;
      } else if (page.otpOnly) {
        page.timerDisplay = '02:00';

        const twoMinutes = 2 * 60;
        let timer = twoMinutes;

        const interval = setInterval(() => {
          const minutes = Math.floor(timer / 60);
          const seconds = timer % 60;

          page.timerDisplay = `${minutes < 10 ? '0' : ''}${minutes}:${
            seconds < 10 ? '0' : ''
          }${seconds}`;

          if (--timer < 0) {
            // Timer has reached zero, you can add your logic here
            // For example, alert("Time's up!");
            page.clickotp = true;
            clearInterval(interval);
          }
        }, 1000);
      }

      //appendnew_next_sd_xQ87KBqChQcJdRV1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xQ87KBqChQcJdRV1');
    }
  }

  sd_E1KRwv3MQEwSZihJ(bh) {
    try {
      this.page.email = bh.input.email;
      this.page.name = bh.input.name;
      this.page.phone = bh.input.phone;

      //appendnew_next_sd_E1KRwv3MQEwSZihJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E1KRwv3MQEwSZihJ');
    }
  }

  sd_Mp9nUCmjqa1Qm9nO(bh) {
    try {
      const page = this.page;
      page.show = false;

      //appendnew_next_sd_Mp9nUCmjqa1Qm9nO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mp9nUCmjqa1Qm9nO');
    }
  }

  sd_g7mLaCIRmki2ubZ0(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.params.err,
          'ee8ce2114d',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_nI1djNSHHrQieaH6(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g7mLaCIRmki2ubZ0');
    }
  }

  sd_nI1djNSHHrQieaH6(bh) {
    try {
      const page = this.page;
      page.modalHeading = 'Email is not registered with Neutrinos';
      page.modalContent = 'Please use Neutrinos mail id';
      page.modalImage = true;
      page.show = true;

      //appendnew_next_sd_nI1djNSHHrQieaH6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nI1djNSHHrQieaH6');
    }
  }

  sd_xMS4rBAAdlFItgA9(bh) {
    try {
      const page = this.page;
      if (page.count > 0) {
        page.modalContent = 'Otp is incorrect';
        page.error = true;
      } else {
        console.log(bh.error.error.error);
        page.modalHeading = bh.error.error.error;
        page.modalContent = 'Please enter correct details';
        page.show = true;
      }

      //appendnew_next_sd_xMS4rBAAdlFItgA9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xMS4rBAAdlFItgA9');
    }
  }

  async sd_cuKIqD7TNgcYX9Io(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](this.page.count, 0, undefined, undefined)
      ) {
        bh = this.sd_lycE1Aa1SCOc2dj7(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XuRtMb0fBMmqJqRZ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cuKIqD7TNgcYX9Io');
    }
  }

  sd_lycE1Aa1SCOc2dj7(bh) {
    try {
      const page = this.page;
      bh.local.signin = true;
      bh.local.url = `${page.system.environment.properties.ssdURL}login`;

      bh.local.body = {
        email: page.email,
        name: page.name,
        phone: page.phone,
      };

      page.otpOnly = true;

      page.clickotp = false;

      bh = this.sd_WraVQMkkUavrORBK(bh);
      //appendnew_next_sd_lycE1Aa1SCOc2dj7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lycE1Aa1SCOc2dj7');
    }
  }

  sd_XuRtMb0fBMmqJqRZ(bh) {
    try {
      const page = this.page;
      page.modalHeading = 'Please contact admin';
      page.modalContent =
        'Person 1: Name: Eldho John Email: eldho.john@neutrinos.co Phone Number: 8281415927 Person 2: Name: Arpit Bhatia Email: arpit.bhatia@neutrinos.co Phone Number: 8007604486';
      page.show = true;

      //appendnew_next_sd_XuRtMb0fBMmqJqRZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XuRtMb0fBMmqJqRZ');
    }
  }

  sd_TXhaRMQXXnauOPir(bh) {
    try {
      const page = this.page;
      const isEnterKey = bh.input.event.key === 'Enter';
      const isTabKey = bh.input.event.key === 'Tab';

      if (isEnterKey || (isTabKey && bh.input.nextInputId)) {
        bh.input.event.preventDefault();
        const nextInput = document.getElementById(bh.input.nextInputId);
        if (nextInput) {
          nextInput.focus();
        }
      }

      //appendnew_next_sd_TXhaRMQXXnauOPir
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TXhaRMQXXnauOPir');
    }
  }

  sd_CuybTE5oFJdOBaPP(bh) {
    try {
      const page = this.page;
      document.getElementById('box3').focus();

      //appendnew_next_sd_CuybTE5oFJdOBaPP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CuybTE5oFJdOBaPP');
    }
  }

  sd_SdXWG3cSnAve7QiY(bh) {
    try {
      const page = this.page; // const currentInput = document.activeElement;

      //   if (bh.input.nextInputId && currentInput instanceof HTMLInputElement && currentInput.value.length === currentInput.maxLength) {
      //     const nextInput = document.getElementById(bh.input.nextInputId);
      //     if (nextInput instanceof HTMLInputElement) {
      //       nextInput.focus();
      //     }
      //   } else {
      //     const inputElements = Array.from(document.getElementsByTagName('input')) as HTMLInputElement[];
      //     const currentIndex = inputElements.indexOf(currentInput as HTMLInputElement);
      //     if (currentIndex >= 0 && currentIndex < inputElements.length - 1) {
      //       inputElements[currentIndex + 1].focus();
      //     }
      //   }

      const currentInput = document.activeElement as HTMLInputElement;

      if (
        bh.input.nextInputId &&
        currentInput instanceof HTMLInputElement &&
        currentInput.value.length === currentInput.maxLength
      ) {
        const nextInput = document.getElementById(bh.input.nextInputId);
        if (nextInput instanceof HTMLInputElement) {
          nextInput.focus();
        }
      } else {
        const inputElements = Array.from(
          document.getElementsByTagName('input')
        ) as HTMLInputElement[];
        const currentIndex = inputElements.indexOf(currentInput);

        if (currentIndex >= 0 && currentIndex < inputElements.length - 1) {
          if (currentInput.value === '') {
            const prevInput = inputElements[currentIndex - 1];
            if (prevInput instanceof HTMLInputElement) {
              prevInput.focus();
            }
          } else {
            inputElements[currentIndex + 1].focus();
          }
        }
      }

      //appendnew_next_sd_SdXWG3cSnAve7QiY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SdXWG3cSnAve7QiY');
    }
  }

  sd_lVekG2n5pFYphqOv(bh) {
    try {
      const page = this.page;
      const currentInput = document.activeElement as HTMLInputElement;
      const inputElements = document.getElementsByTagName('input');

      if (bh.input.event.key === 'Backspace' && currentInput.value === '') {
        if (bh.input.prevInputId > 0) {
          const prevInput = document.getElementById(
            'input' + bh.input.prevInputId
          ) as HTMLInputElement;
          if (prevInput) {
            prevInput.focus();
            return;
          }
        }

        // If the current input is the last one and is empty,
        // move focus to the previous non-empty input.
        for (let i = inputElements.length - 2; i >= 0; i--) {
          const inputElement = inputElements[i] as HTMLInputElement;
          if (
            inputElement.id !== currentInput.id &&
            inputElement.value !== ''
          ) {
            inputElement.focus();
            return;
          }
        }
      }

      //appendnew_next_sd_lVekG2n5pFYphqOv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lVekG2n5pFYphqOv');
    }
  }

  sd_Qjw0gGHiMZmXhl3b(bh) {
    try {
      const page = this.page;
      console.log(bh.local.otpInput);

      //appendnew_next_sd_Qjw0gGHiMZmXhl3b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qjw0gGHiMZmXhl3b');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const _route_sd_WQEqroXOae6w1XSC = this.page._route_sd_WQEqroXOae6w1XSC;
      if (
        _route_sd_WQEqroXOae6w1XSC &&
        typeof _route_sd_WQEqroXOae6w1XSC.unsubscribe === 'function'
      ) {
        _route_sd_WQEqroXOae6w1XSC.unsubscribe();
      }
    }
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_QWNRYLnTwpvSw79Q(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_QWNRYLnTwpvSw79Q(bh) {
    const catchConnectedNodes = ['sd_xMS4rBAAdlFItgA9'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_xMS4rBAAdlFItgA9(bh);
    //appendnew_next_sd_QWNRYLnTwpvSw79Q
    return true;
  }
  //appendnew_flow_AuthLayoutComponent_Catch
}
