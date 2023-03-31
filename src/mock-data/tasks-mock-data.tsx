import { StatusEnum } from "../colum-status";
import {v4 as uuidv4} from 'uuid';

export const tasks = [
  {
    id: uuidv4(),
    titleTask: "Clean the room",
    description: "Mop the floor",
    responsable: "Me",
    date: "22/02/23",
    priority: "High",
    status: StatusEnum.TO_DO,
  },
  {
    id: uuidv4(),
    titleTask: "Clean the house",
    description: "Mop the kitchen",
    responsable: "Me",
    date: "22/02/23",
    priority: "low",
    status: StatusEnum.TO_DO,
  },
  {
    id: uuidv4(),
    titleTask: "Clean the room",
    description: "Mop the floor",
    responsable: "Me",
    date: "22/02/23",
    priority: "High",
    status: StatusEnum.TO_DO,
  },
  {
    id: uuidv4(),
    titleTask: "Clean the house",
    description: "Mop the kitchen",
    responsable: "Me",
    date: "22/02/23",
    priority: "low",
    status: StatusEnum.TO_DO,
  },
  {
    id: uuidv4(),
    titleTask: "Clean the room",
    description: "Mop the floor",
    responsable: "Me",
    date: "22/02/23",
    priority: "High",
    status: StatusEnum.IN_PROGRESS,
  },
  {
    id: uuidv4(),
    titleTask: "Clean the house",
    description: "Mop the kitchen",
    responsable: "Me",
    date: "22/02/23",
    priority: "low",
    status: StatusEnum.COMPLETED,
  },
]