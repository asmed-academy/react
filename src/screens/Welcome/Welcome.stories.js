import React from 'react';
import { action } from "@storybook/addon-actions";

import { Welcome } from './dumb';

import { SimpleTabs } from './menu';

export default {
    title: 'Welcome'
};

export const Default = () => (
    <Welcome
        onCPFReady={action('onCPFReady')}
        nextPage={action("Passando para a proxima página")} />
);

export const IsLoadingData = () => (
    <Welcome
        isLoadingData={true}
        onCPFReady={action('onCPFReady')}
        nextPage={action("Passando para a proxima página")} />
);

export const WithError = () => (
    <Welcome
        isLoadingData={false}
        cpfErrorText="Usuario não encontrado"
        onCPFReady={action('onCPFReady')}
        nextPage={action("Passando para a proxima página")} />
);