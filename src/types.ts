export interface Channel {
  id?: string;
  name: string;
  messages: Message[];
}
export interface Message {
  id?: string;
  timestamp: Date;
  user: string;
  content: string;
}
