import * as Flex from '@twilio/flex-ui';

import IFrameCRMTab from '../../custom-components/IFrameCRMTab';
import { FlexActionEvent } from '../../../../types/feature-loader';
import { getUrlTabTitle } from '../../config';

import { validateInternalCall } from '../../helpers/outboundHelper';

export const actionEvent = FlexActionEvent.before;
export const actionName = 'LoadCRMContainerTabs';
export const actionHook = function addURLTabToEnhancedCRM(flex: typeof Flex) {
  flex.Actions.addListener(`${actionEvent}${actionName}`, async (payload) => {
    if (!payload.task ) {
      return;
    }
    if (payload.task.attributes.direction === 'outbound' ) {

      console.log('[zeus-crm] entered to outbound validation');
      const callSid = await validateInternalCall(payload.task);
      console.log('[zeus-crm] finishes outbound validation, callSid:',callSid);

      payload.task.callSid = callSid;
      console.log('callsid inserted:',payload.task.callSid)
    }

    payload.components = [
      ...payload.components,
      { title: getUrlTabTitle(),
        order: 0, component: <IFrameCRMTab task={payload.task} key="iframe-crm-container" /> },
    ];
  });
};
