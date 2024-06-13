import React, { useState, useRef } from 'react';
import { IconButton } from '@twilio/flex-ui';
import * as Flex from '@twilio/flex-ui';

import { IFrameRefreshButtonStyledDiv } from './IFrameCRMTab.Styles';
import { getUrl,getConversationAttributeKey } from '../../config';
import { replaceStringAttributes } from '../../../../utils/helpers';
import * as FlexInsightsHelper from '../../helpers/flexInsightsHelper';

export interface Props {
  task: any;
}

export const IFrameCRMTab = ({ task }: Props) => {
  const iFrameRef = useRef<HTMLIFrameElement>(null);
  const [iFrameKey, setIframeKey] = useState(0 as number);

  const handleOnClick = () => {
    setIframeKey(Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER + 1)));
  };

  const { attributes, callSid, taskSid, taskChannelUniqueName, sid, queueName } = task;
  const { channelSid, direction, call_sid } = attributes;

  let configUrl = getUrl();
  const conversationAttributeKey = getConversationAttributeKey();

  console.info("Zeus URL:",configUrl)
  console.log("Task:",task)
  
  if (Flex.TaskHelper.isChatBasedTask(task)){
    configUrl = configUrl.replace('{{task.interactionId}}', channelSid);
    FlexInsightsHelper.setInteractionIdAttribute(taskSid,conversationAttributeKey, channelSid);
  }
  else {
    const interactionId = direction === 'outbound' ? callSid : call_sid;
    configUrl = configUrl.replace('{{task.interactionId}}', interactionId);
    FlexInsightsHelper.setInteractionIdAttribute(taskSid,conversationAttributeKey, interactionId);
  }

  configUrl = configUrl.replace('{{task.sid}}', taskSid);
  configUrl = configUrl.replace('{{task.taskChannelUniqueName}}', taskChannelUniqueName);
  configUrl = configUrl.replace('{{task.reservationSid}}', sid);
  configUrl = configUrl.replace('{{task.queueName}}', queueName);

  const url = replaceStringAttributes(configUrl, task);

  console.info("Zeus URL completed:",url)

  return (
    <>
      <IFrameRefreshButtonStyledDiv onClick={handleOnClick}>
        <IconButton variant="primary" icon="Loading" />
      </IFrameRefreshButtonStyledDiv>
      <iframe key={iFrameKey} src={url} ref={iFrameRef}/>
    </>
  );
};
