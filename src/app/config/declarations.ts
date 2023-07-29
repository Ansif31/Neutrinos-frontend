import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-cameraComponent
import { cameraComponent } from '../components/ADMIN/Pages/camera.component';
//CORE_REFERENCE_IMPORT-test2Component
import { test2Component } from '../components/test2.component';
//CORE_REFERENCE_IMPORT-webcamService
import { webcamService } from '../services/webcam/webcam.service';
//CORE_REFERENCE_IMPORT-LoadingComponent
import { LoadingComponent } from '../components/Loading.component';
//CORE_REFERENCE_IMPORT-UploadImageComponent
import { UploadImageComponent } from '../components/ADMIN/Pages/UploadImage.component';
//CORE_REFERENCE_IMPORT-UserAddComponent
import { UserAddComponent } from '../components/ADMIN/Pages/UserAdd.component';
//CORE_REFERENCE_IMPORT-GoodiesComponent
import { GoodiesComponent } from '../components/ADMIN/Pages/Goodies.component';
//CORE_REFERENCE_IMPORT-AdminHomeComponent
import { AdminHomeComponent } from '../components/ADMIN/Pages/AdminHome.component';
//CORE_REFERENCE_IMPORT-ScanningComponent
import { ScanningComponent } from '../components/ADMIN/Pages/Scanning.component';
//CORE_REFERENCE_IMPORT-AdminLayoutComponent
import { AdminLayoutComponent } from '../components/ADMIN/AdminLayout.component';
//CORE_REFERENCE_IMPORT-ModalComponent
import { ModalComponent } from '../components/Modal.component';
//CORE_REFERENCE_IMPORT-authguardService
import { authguardService } from '../services/authguard/authguard.service';
//CORE_REFERENCE_IMPORT-ScannerComponent
import { ScannerComponent } from '../components/USER/Pages/Scanner.component';
//CORE_REFERENCE_IMPORT-testComponent
import { testComponent } from '../components/test.component';
//CORE_REFERENCE_IMPORT-UserLayoutComponent
import { UserLayoutComponent } from '../components/USER/UserLayout.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/USER/Pages/Home.component';
//CORE_REFERENCE_IMPORT-AuthLayoutComponent
import { AuthLayoutComponent } from '../components/AUTH/AuthLayout.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cameraComponent
  cameraComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-test2Component
  test2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-LoadingComponent
  LoadingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-UploadImageComponent
  UploadImageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-UserAddComponent
  UserAddComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-GoodiesComponent
  GoodiesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-AdminHomeComponent
  AdminHomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ScanningComponent
  ScanningComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-AdminLayoutComponent
  AdminLayoutComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ModalComponent
  ModalComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ScannerComponent
  ScannerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-UserLayoutComponent
  UserLayoutComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-AuthLayoutComponent
  AuthLayoutComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-webcamService
  webcamService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-authguardService
  authguardService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [authguardService],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    canActivate: [authguardService],
    children: [{ path: 'home', component: HomeComponent }],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authguardService],
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'camera', component: cameraComponent },
    ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
