---
sidebar_label: hubspot-crm
title: hubspot-crm
---

## Feature summary

Adding the Hubspot integration to the Flex Project Template using the enhanced-crm-container feature.

## Flex User Experience

Below is a demonstration showing the CRM container maintained for outbound callbacks, as well as the extensible tabbed interface (using canned responses as an example).

![Hubspot with Enhanced CRM Container demo](/img/features/enhanced-crm-container/flex-user-experience-enhanced-crm-container.gif)

## Setup and dependencies

Within your `ui_attributes` file, you must set two settings for this feature:

- `enabled` - set this to true to enable the feature
- `url_tab_title` - set the tab title that will be displayed for the configured URL
- `url` - set this to the URL to embed within the CRM container

Once your updated flex-config is deployed, the feature is enabled and ready to use.

## How does it work?

The component keeps a array of each task and renders a component for each one. Based on the currently selected task, the component re-renders and modifies the CSS to either hide or show based on whether it is the currently selected task. Once the task is removed the component is removed.

We register a tab in the enhanced CRM component using an `actions` flex-hook to inject their component and a tab title.
