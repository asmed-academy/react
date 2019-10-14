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
    user: {
      name: "asd",
      id: "123"
    },
    status: "confirmed"
  },
  {
    id: "asdasdasds",
    date: new Date("2019-10-20T14:00:00.000"),
    service: {
      id: "cardiologista-xpto-01",
      name: "Qwerasd",
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
  {
    id: "fghfghft",
    date: new Date("2019-05-20T14:00:00.000"),
    service: {
      id: "cardiologista-xpto-01",
      name: "Odontologia",
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
  {
    id: "hgukhuku",
    date: new Date("2019-05-20T20:00:00.000"),
    service: {
      id: "cardiologista-xpto-01",
      name: "asdawd",
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
  }
];
