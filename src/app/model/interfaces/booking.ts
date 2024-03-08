import { Timestamp } from "firebase/firestore";
import { BookingStatus } from "../enum/booking-status";
import { Device } from "./device";
import { ZoneNameable } from "./zone-nameable";

export interface Booking {
    id: string;
    deviceId: number;
    gamingCenterId: string;
    phoneNumber: string;
    userName: string;
    status: BookingStatus;
    zoneId: string;
    timeFrom: Date;
    timeTo: Date;
    tariffId: number;
}
