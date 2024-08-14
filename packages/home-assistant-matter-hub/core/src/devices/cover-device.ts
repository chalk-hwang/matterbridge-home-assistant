import { DeviceTypes } from '@project-chip/matter.js/device';

import { DeviceBase, DeviceBaseConfig } from './device-base.js';

import { IdentifyAspect, WindowCoveringAspect, WindowCoveringAspectConfig } from '../aspects/index.js';
import { HomeAssistantClient } from '../home-assistant-client/index.js';
import { HomeAssistantMatterEntity } from '../models/index.js';

export interface CoverDeviceConfig extends WindowCoveringAspectConfig, DeviceBaseConfig {}

export class CoverDevice extends DeviceBase {
  constructor(client: HomeAssistantClient, entity: HomeAssistantMatterEntity, config: CoverDeviceConfig) {
    super(entity, DeviceTypes.WINDOW_COVERING, config);

    this.addAspect(new IdentifyAspect(this.endpoint, entity));
    this.addAspect(new WindowCoveringAspect(client, entity, this.endpoint, config));
  }
}
