import { EnumType } from "typescript"
import { ColumnStatusEnum } from "./components/enums"

export interface Task {
  id: any,
  titleTask: string,
  description: string,
  responsable: string,
  date: string,
  priority: string,
  status: ColumnStatusEnum
}

export interface TaskStatus {
  pending: Status,
  inProgress: Status,
  done: Status
}

export interface Status {
  title: string,
  slug: string
  color: string
}

export interface StatusColor{
  informative: string
  warning: string
  success: string
}