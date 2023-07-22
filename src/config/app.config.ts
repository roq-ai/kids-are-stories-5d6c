interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Reader'],
  tenantRoles: ['Owner'],
  tenantName: 'Organization',
  applicationName: 'KIDS ARE STORIES',
  addOns: ['notifications', 'chat', 'file'],
};
