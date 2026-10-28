// Types de conge du cahier des charges : CP, RTT, maladie, sans solde.
export type LeaveType = 'paid' | 'rtt' | 'sick' | 'unpaid';

// Validation a deux niveaux : le manager, puis les RH.
export type LeaveStatus = 'pending' | 'manager-approved' | 'approved' | 'rejected';

export interface LeaveRequest {
  id: number;
  employeeId: number;
  type: LeaveType;
  startDate: string;
  endDate: string;
  reason?: string;
  status: LeaveStatus;
}

// Record<LeaveType, string> oblige a fournir un libelle pour chaque type :
// si un type est ajoute a LeaveType, TypeScript signale le libelle manquant.
export const LEAVE_TYPE_LABELS: Record<LeaveType, string> = {
  paid: 'Congés payés',
  rtt: 'RTT',
  sick: 'Maladie',
  unpaid: 'Sans solde',
};

export const LEAVE_STATUS_LABELS: Record<LeaveStatus, string> = {
  pending: 'En attente du manager',
  'manager-approved': 'En attente des RH',
  approved: 'Validée',
  rejected: 'Refusée',
};
