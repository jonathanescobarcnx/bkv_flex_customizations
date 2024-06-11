import { getFeatureFlags } from '../../utils/configuration';
import HubspotCrmConfig from './types/ServiceConfiguration';

const {
   enabled = false,
   url_tab_title = '',
   url = '',
   url_when_contact_not_found = '',
} = (getFeatureFlags()?.features?.hubspot_crm as HubspotCrmConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const getUrl = () => {
  return url;
};

export const displayUrlWhenContactNotFound = () => {
  return url_when_contact_not_found;
};

export const getUrlTabTitle = () => {
  return url_tab_title;
};