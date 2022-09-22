export interface EventFormValues {
  name: string;
  date: string; // date string
}

export interface EventEntity {
  id: string;
  name: string;
  date: string; // date string
}

export type EventState = EventEntity[];
