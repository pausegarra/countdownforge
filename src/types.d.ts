export type Countdown = {
  id: string;
  name: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  is_public: boolean;
  target: Date;
};