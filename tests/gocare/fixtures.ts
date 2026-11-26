import { expect, test as base } from '@playwright/test';
import type { Request } from '@playwright/test';
import { DataProvider } from '../../utils/dataProvider';

const caseTags = new Map<string, string[]>(
  DataProvider.getTestDataFromCsv('reports/gocare-automation-first-traceability.csv')
    .map((row: { 'TestRail ID': string; Tags: string }) => [row['TestRail ID'], row.Tags.trim().split(/\s+/)]),
);

export function tagsFor(id: string) {
  const tag = caseTags.get(id);
  if (!tag?.length) throw new Error(`No approved TestRail tags found for ${id}`);
  return { tag };
}

const origin = 'https://gocare.msbedrock.com';
const privacyOrigins = new Set(['https://www.internationalsos.com', 'https://internationalsos.com']);
const destinations = new Set([
  '/', '/login.aspx', '/default.aspx',
  '/employee/searchemployee.aspx', '/employee/createemployee.aspx',
  '/employee/medicalexamexpirations.aspx',
  '/medicalexam/searchreviewedexams.aspx', '/company/searchmet.aspx',
  '/medicalexam/generatereminderandhealthpassport.aspx',
  '/company/companymobilestaticcontent.aspx', '/company/companymenuitem.aspx',
  '/company/companyempcategory.aspx', '/company/createcompany.aspx',
  '/systemconfiguration/searchmedicalcenter.aspx', '/systemconfiguration/medicalcentermaster.aspx',
  '/systemconfiguration/bloodpressuremaster.aspx', '/systemconfiguration/fitnessconclusionmaster.aspx',
  '/employee/sendwelcomeemail.aspx', '/employee/dropboxuploadwithmenu.aspx',
  '/import/viewimportactivities.aspx', '/company/fitnessconclusion.aspx', '/systemconfiguration/codemaster.aspx',
  '/systemconfiguration/servicemanagement.aspx',
  '/systemconfiguration/searchglobalmet.aspx',
  '/usermanagement/forgotpasswordusername.aspx', '/usermanagement/employeeregistration.aspx',
  '/usermanagement/changepassword.aspx', '/usermanagement/searchusers.aspx',
  '/usermanagement/createuser.aspx', '/staticcontent/public-contact-us.html',
  '/vaccination/searchemployeevaccination.aspx', '/company/searchcompany.aspx',
  '/systemconfiguration/searchwidgetconfiguration.aspx',
  '/company/companyarea.aspx', '/company/companybusinessarea.aspx',
  '/company/companygeomarket.aspx', '/company/companyjobsite.aspx',
  '/company/companyadditionalinformation.aspx', '/systemconfiguration/searchhealthcheckitem.aspx',
  '/company/companyjobtitle.aspx',
  '/systemconfiguration/medicalhistoryitem.aspx', '/systemconfiguration/vaccinationmaster.aspx',
  '/systemconfiguration/vaccinationreminder.aspx',
]);
const staticResources = new Set(['stylesheet', 'script', 'image', 'font']);
const formActions = new Map([
  ['/employee/searchemployee.aspx', ['btnSearch']],
  ['/employee/createemployee.aspx', ['btnCancel']],
  ['/vaccination/searchemployeevaccination.aspx', ['btnSearch']],
  ['/systemconfiguration/searchwidgetconfiguration.aspx', ['ddlCompanyName', 'btnSearch']],
  ['/usermanagement/createuser.aspx', ['ddlRoleList', 'btnCancel']],
  ['/company/searchcompany.aspx', ['btnSearch', 'btnAdd']],
  ['/systemconfiguration/searchglobalmet.aspx', ['btnSearch', 'btnAdd', 'btnClearSearch']],
  ['/company/searchmet.aspx', ['btnSearch']],
  ['/medicalexam/searchreviewedexams.aspx', ['btnReset']],
  ['/medicalexam/generatereminderandhealthpassport.aspx', ['ddlCompany', 'btnCancel']],
  ['/company/companymobilestaticcontent.aspx', ['btnSearch', 'btnClearSearch']],
  ['/company/companymenuitem.aspx', ['btnClearSearch', 'btnAdd', 'btnSearch', 'ddlCompany', 'gdvCompanyMenuItemContent$ctl03$btnSaveCancel']],
  ['/company/companyjobtitle.aspx', ['btnClearSearch', 'btnSearch']],
  ['/company/companyjobsite.aspx', ['btnSearch']],
  ['/systemconfiguration/searchhealthcheckitem.aspx', ['btnAdd', 'ddlItemtype']],
  ['/company/companyarea.aspx', ['btnAdd']],
  ['/company/companybusinessarea.aspx', ['btnAdd']],
  ['/company/companygeomarket.aspx', ['btnAdd']],
  ['/company/companyempcategory.aspx', ['btnAdd', 'btnSearch']],
  ['/company/fitnessconclusion.aspx', ['btnSearch', 'btnAdd', 'btnClearSearch']],
  ['/systemconfiguration/searchmedicalcenter.aspx', ['btnAdd']],
  ['/systemconfiguration/bloodpressuremaster.aspx', ['btnAdd', 'btnSearch']],
  ['/systemconfiguration/vaccinationreminder.aspx', ['btnAdd', 'btnSearch']],
  ['/systemconfiguration/fitnessconclusionmaster.aspx', ['btnSearch', 'btnAdd', 'btnClearSearch']],
  ['/systemconfiguration/vaccinationmaster.aspx', ['btnAdd', 'btnSearch']],
  ['/systemconfiguration/codemaster.aspx', ['btnAdd', 'btnSearch']],
  ['/employee/dropboxuploadwithmenu.aspx', ['DropBox$btnCancel']],
]);
const field = 'ctl00$MedtrackContentPlaceHolder$';

type Policy = {
  allowOnce(path: string, action: string, criteria?: Record<string, string>): void;
  allowVaccinationCriteria(): void;
  allowPasswordNavigation(): void;
  expectActions(...actions: string[]): void;
};

export const test = base.extend<{ traffic: Policy }>({
  traffic: [async ({ context }, use) => {
    let allowed: { path: string; action: string; criteria: Record<string, string> } | undefined;
    const lookups = new Set<string>();
    let passwordNavigation = false;
    const approved: string[] = [];
    const rejected: string[] = [];
    await context.route('**/*', async route => {
      const request = route.request();
      const url = new URL(request.url());
      const pathname = url.pathname.toLowerCase();
      if (request.method() === 'GET' || request.method() === 'HEAD') {
        if (request.method() === 'GET' && url.origin === origin && pathname === '/ajax/employeemanagementutility.aspx'
            && request.resourceType() === 'xhr'
            && new URL(request.frame().url()).pathname.toLowerCase() === '/vaccination/searchemployeevaccination.aspx') {
          const keys = [...url.searchParams.keys()];
          const name = ['Category', 'CompanyArea'].find(key => lookups.has(key) && url.searchParams.get(key) === 'Yes');
          if (name && keys.length === 3 && new Set(keys).size === 3
              && url.searchParams.get('CompanyID') === '129'
              && /^\d+(?:\.\d+)?$/.test(url.searchParams.get('newreq') ?? '')) {
            lookups.delete(name);
            approved.push(name);
            return route.continue();
          }
          rejected.push('Unapproved company lookup');
          return route.abort();
        }
        if (url.origin === origin && ((destinations.has(pathname) && !url.search) || isStatic(request))) {
          return route.continue();
        }
        // Context routes intercept the initial navigation of popups as well.
        if (privacyOrigins.has(url.origin) && /^\/privacy(?:-centre)?\/?$/.test(pathname) && !url.search) {
          return route.continue();
        }
        return route.abort();
      }
      const body = new URLSearchParams(request.postData() ?? '');
      if (passwordNavigation && request.method() === 'POST' && url.origin === origin
          && pathname === '/usermanagement/changepassword.aspx' && request.isNavigationRequest()
          && [...url.searchParams.keys()].join() === 'PersonalData'
          && body.get('__EVENTTARGET') === 'ctl00$lvWelcomeNote$lnkChangePassword'
          && new URL(request.frame().url()).pathname.toLowerCase() === '/employee/searchemployee.aspx'
          && ![...body.keys()].some(key => /password|btnsubmit|btnsave/i.test(key))) {
        passwordNavigation = false;
        approved.push('lnkChangePassword');
        return route.continue();
      }
      if (request.method() === 'POST' && url.origin === origin && allowed?.path === pathname
          && (body.has(field + allowed.action) || body.get('__EVENTTARGET') === field + allowed.action)
          && Object.entries(allowed.criteria).every(([key, value]) => {
            const values = body.getAll(field + key);
            return values.length === 1 && values[0] === value;
          })
          && ![...body.keys(), body.get('__EVENTTARGET') ?? ''].some(key =>
            key !== field + allowed.action
            && /\$(?:btn(?:Save|Submit|Register|Send|Generate|Delete|Print|Import|Export|Download)|cmdSubmit|lnksave|bLogin)/i.test(key))) {
        approved.push(allowed.action);
        allowed = undefined;
        return route.continue();
      }
      rejected.push(request.method());
      return route.abort();
    });

    await use({
      allowOnce(path, action, criteria = {}) {
        const normalized = path.toLowerCase();
        if (allowed || !formActions.get(normalized)?.includes(action)) {
          throw new Error('Unexpected or unconsumed GoCare action permit');
        }
        if (action !== 'btnAdd' && !Object.keys(criteria).length) {
          throw new Error('An approved GoCare read requires exact form criteria');
        }
        allowed = { path: normalized, action, criteria };
      },
      allowVaccinationCriteria() {
        if (lookups.size) throw new Error('Unconsumed vaccination lookup permit');
        lookups.add('Category');
        lookups.add('CompanyArea');
      },
      allowPasswordNavigation() {
        if (passwordNavigation) throw new Error('Unconsumed change-password navigation permit');
        passwordNavigation = true;
      },
      expectActions(...actions) {
        expect(approved).toEqual(actions);
      },
    });
    expect(rejected, 'Unexpected non-read request was blocked').toEqual([]);
    expect(allowed, 'Approved action was never observed').toBeUndefined();
    expect([...lookups], 'Approved lookup was never observed').toEqual([]);
    expect(passwordNavigation, 'Approved change-password link navigation was never observed').toBe(false);
  }, { auto: true }],
});

function isStatic(request: Request) {
  const path = new URL(request.url()).pathname;
  if (request.resourceType() === 'script' && /^\/(?:ScriptResource|WebResource)\.axd$/i.test(path)) {
    return true;
  }
  return staticResources.has(request.resourceType())
    && /\.(?:css|js|png|gif|jpe?g|svg|ico|woff2?|ttf|webp)$/i.test(path);
}

export { expect };
