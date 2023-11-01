export interface ITech {
  name: string;
  Icon: React.FC<{ className?: string }>;
  color: string;
}

export interface IField {
  id: number;
  name: string;
  description: string;
  techList: ITech[];
}
