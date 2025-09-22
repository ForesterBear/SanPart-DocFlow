import 'express-session';

declare module 'express-session' {
    interface SessionData {
        token?: string;
    }
}
import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
export interface JournalAmbulatoryAppointment {
    id: string;
    patientName: string;
    appointmentDate: Date;
    doctorName: string;
    diagnosis: string;
}

export interface JournalPatientsRegistry {
    id: string;
    patientName: string;
    admissionDate: Date;
    yearOfBirth: number;
    militaryRank: string;
    unit: string;
    diagnosis: string;
    transferredToHospital?: {
        name: string;
        transferDate: Date;
    };
    dischargeDate?: Date;
    notes?: string;
}

export interface JournalDressingsRegistry {
    id: string;
    procedureDate: Date;
    patientName: string;
    procedureDetails: string;
    frequency: string;
}

export interface CleaningRegistry {
    id: string;
    cleaningDate: Date;
    responsiblePerson: string;
    notes?: string;
}