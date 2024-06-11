import * as Flex from '@twilio/flex-ui';

import TaskRouterService from '../../../utils/serverless/TaskRouter/TaskRouterService';

const instanceSid = Flex.Manager.getInstance().serviceConfiguration.flex_service_instance_sid;

export const setInteractionIdAttribute = async (
  taskSid: string,
  value: string,
) => {

  const newAttributes = {
    conversations: {
      conversation_attribute_1: value,
    },
  };

  try {
    await TaskRouterService.updateTaskAttributes(taskSid, newAttributes,true);
  } catch (error) {
    console.log(`Failed to set conversation_atribute_1(interactionId) attribute for ${taskSid} to ${value}`, error);
  }
  console.log(`Set conversation_atribute_1(interactionId) attribute for ${taskSid} to ${value}`, newAttributes);
};
