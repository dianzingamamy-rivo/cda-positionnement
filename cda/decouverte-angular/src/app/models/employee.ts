// Les quatre roles definis par le cahier des charges TechCorp RH.
export type Role = 'employee' | 'manager' | 'hr' | 'admin';

// Forme d'un employe, telle que l'API la renverra a partir de la seance 7.
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  role: Role;
  // Optionnel : la direction n'a pas de manager.
  managerId?: number;
  // Date d'embauche au format ISO (AAAA-MM-JJ), jamais modifiee.
  readonly hiredAt: string;
}
