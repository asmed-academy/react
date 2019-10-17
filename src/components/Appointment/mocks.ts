import { Appointment } from "../../domain/Appointment.domain";

export const mockAppointments: Appointment[] = [
  {
    id: "qweqewqe",
    date: new Date("2019-10-15T14:00:00.000"),
    service: {
      id: "bruno-xpto-01",
      name: "Altenor da Silva Sauro",
      categoryName: "Serviços Médicos",
      price: 60
    },
    serviceProvider: {
      id: "magscan",
      name: "Clínica Magscan"
    },
    user: {
      name: "asd",
      id: "123"
    },
    status: "confirmed"
  },
];
