import { getFeatureFlags } from '../../utils/configuration';
import HubspotCrmConfig from './types/ServiceConfiguration';

const {
   enabled = false,
   url_tab_title = '',
   url = '',
} = (getFeatureFlags()?.features?.hubspot_crm as HubspotCrmConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const getUrl = () => {
  return url;
};

export const getUrlTabTitle = () => {
  return url_tab_title;
};