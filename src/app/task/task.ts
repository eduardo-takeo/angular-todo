export interface Task {
  id: number;
  title: string;
  status: 'ACTIVE' | 'COMPLETED';
}