import { Sequela } from './sequela.model';

export interface MedicalData {
  diagnosis_date: string | null;
  surgery_date: string | null;
  surgery_type: string;
  physiotherapy_referral: boolean;
  physiotherapy_duration: string | null;
  sufficient_recovery: boolean;
  present_sequela: Sequela;
  remaining_sequela: Sequela;
  impact_on_daily_life: string;
  affects_independence: boolean;
  post_surgery_activities: string;
  medical_conditions: string[];
  other_diagnoses: string;
  medications: string;
}
