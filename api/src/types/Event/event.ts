export interface EventEntity {
  id: string;
  name: string;
  date: string;
}
export type GetAllEvents = EventEntity[];

export interface CreateEventResponse {
  id: string;
  name: string;
  date: string;
}

export interface CreateEventRequest {
  name: string;
  date: string;
}
