import { Personnel } from "./personnel";
import { Tariff } from "./tariff";
import { Zone } from "./zone";

export interface GamingCenter {
    id: number,
    name: string,
    personnel: Personnel,
    tariffs: Tariff,
    zone: Zone
}
