import * as Flex from '@twilio/flex-ui';

import IFrameCRMTab from '../../custom-components/IFrameCRMTab';
import { FlexActionEvent } from '../../../../types/feature-loader';
import { getUrlTabTitle } from '../../config';

export const actionEvent = FlexActionEvent.before;
export const actionName = 'LoadCRMContainerTabs';
export const actionHook = function addURLTabToEnhancedCRM(flex: typeof Flex) {
  flex.Actions.addListener(`${actionEvent}${actionName}`, async (payload) => {
    if (!payload.task ) {
      return;
    }

    payload.components = [
      ...payload.components,
      { title: getUrlTabTitle(),
        order: 0, component: <IFrameCRMTab task={payload.task} key="iframe-crm-container" /> },
    ];
  });
};
