export interface Task {
  id: string | number;
  title: string;
  status: 'ACTIVE' | 'COMPLETED';
}
