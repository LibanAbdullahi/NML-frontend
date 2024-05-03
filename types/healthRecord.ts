// types/healthRecord.ts
export interface HealthRecord {
    _id: string;
    userId: string;
    medicalHistory: string;
    currentMedications: string[];
    allergies: string[];
    labResults: Array<{ date: string; result: string }>;
    // other health record properties...
  }
  