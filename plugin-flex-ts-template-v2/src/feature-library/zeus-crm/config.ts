import { getFeatureFlags } from '../../utils/configuration';
import ZeusCrmConfig from './types/ServiceConfiguration';

const {
  enabled = false,
  url_tab_title = '',
  url = '',
  conversation_attribute_key ='conversation_attribute_1',
} = (getFeatureFlags()?.features?.zeus_crm as ZeusCrmConfig) || {};

export const isFeatureEnabled = () => {
 return enabled;
};

export const getUrl = () => {
 return url;
};

export const getConversationAttributeKey = () => {
  return conversation_attribute_key;
 };
export const getUrlTabTitle = () => {
 return url_tab_title;
};