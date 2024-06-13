import TaskRouterService from '../../../utils/serverless/TaskRouter/TaskRouterService';

export const setInteractionIdAttribute = async (
  taskSid: string,
  attributeKey: string,
  value: string,
) => {

  const newAttributes = {
    conversations: {
      [attributeKey]: value,
    },
  };

  try {
    await TaskRouterService.updateTaskAttributes(taskSid, newAttributes,true);
  } catch (error) {
    console.error(`Failed to set ${attributeKey} attribute for ${taskSid} to ${value} (interactionId)` , error);
  }
  console.log(`Set ${attributeKey} attribute for ${taskSid} to ${value}(interactionId)`, newAttributes);
};
