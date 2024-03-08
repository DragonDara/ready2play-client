import { Device } from "./device";
import { ZoneNameable } from "./zone-nameable";

export interface Zone extends ZoneNameable{
    devices: Device[]
}
