import { DeviceEnum } from "../enum/device-enum";
import { DeviceMode } from "../enum/device-mode";

export interface Device {
    type: DeviceEnum,
    number: number,
    mode: DeviceMode,
    macAddress: string,
    ipAddress: string,
    row: number,
    col: number
}
