export interface Channel {
  name: string;
  messages: Message[];
}
export interface Message {
  timestamp: Date;
  user: string;
  content: string;
}
