import { CiPill, CiStethoscope, CiBandage } from "react-icons/ci";
import { GiMedicalDrip } from "react-icons/gi";
import { TfiWheelchair } from "react-icons/tfi";
import { LuBath } from "react-icons/lu";
import { PiUserList } from "react-icons/pi";
import { MdBabyChangingStation } from "react-icons/md";

export const servicesData = [
  {
    id: 1,
    icon: CiPill,
    title: "Administración de Medicamentos",
    description:
      "Preparación y administración segura de medicamentos según indicaciones médicas.",
  },
  {
    id: 2,
    icon: CiStethoscope,
    title: "Monitoreo de Signos Vitales",
    description:
      "Control constante de presión arterial, temperatura, pulso y otros signos esenciales.",
  },
  {
    id: 3,
    icon: CiBandage,
    title: "Cuidado y Curación de Heridas",
    description:
      "Limpieza, desinfección y vendajes para favorecer la recuperación de heridas y úlceras.",
  },
  {
    id: 4,
    icon: GiMedicalDrip,
    title: "Manejo de Sondas y Catéteres",
    description:
      "Colocación, mantenimiento y cuidado especializado de sondas y catéteres.",
  },
  {
    id: 5,
    icon: TfiWheelchair,
    title: "Asistencia en la Movilización",
    description:
      "Apoyo para desplazamientos y cambios de posición, evitando complicaciones por inmovilidad.",
  },
  {
    id: 6,
    icon: LuBath,
    title: "Higiene Personal del Paciente",
    description:
      "Ayuda en el aseo, baño y cuidado diario para mantener la dignidad y bienestar del paciente.",
  },
  {
    id: 7,
    icon: PiUserList,
    title: "Registro de Evolución del Pacienete",
    description:
      "Documentación detallada del progreso y cambios en la salud para un seguimiento efectivo.",
  },
  {
    id: 8,
    icon: MdBabyChangingStation,
    title: "Cuidados de Recién Nacidos",
    description:
      "Atención profesional para el bienestar y salud del recién nacido en casa.",
  },
];
