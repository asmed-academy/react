import { Appointment } from "../../domain/Appointment.domain";

export const mockAppointments: Appointment[] = [
  {
    id: "qweqewqe",
    date: new Date("2019-10-15T14:00:00.000"),
    service: {
      id: "cardiologista-xpto-01",
      name: "Cardiologia",
      categoryName: "Serviços Médicos",
      price: 60
    },
    serviceProvider: {
      id: "magscan",
      name: "Clínica Magscan"
    },
    status: "confirmed"
  }
];
