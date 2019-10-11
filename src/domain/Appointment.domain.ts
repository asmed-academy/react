export type Appointment = {
  id: string;
  date: Date;
  service: {
    id: string;
    price: number;
    name: string;
    categoryName: string;
  };
  serviceProvider: {
    id: string;
    name: string;
  };
  user: {
    id: string;
    name: string;
  };
  status:
    | "pending"
    | "confirmed"
    | "absent"
    | "cancelled"
    | "expired";
};
