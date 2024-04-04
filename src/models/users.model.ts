export enum UserRole {
  EMPLOYEE = 'EMPLOYEE',
  ADMIN = 'ADMIN',
}

export interface MinData {
  id: number
  name: string
}

export interface RemainingData {
  lastName: string | null
  email: string
  role: UserRole
  createdAt: string
  updatedAt: string | null
}

export interface FullData extends MinData, RemainingData {}

export interface CreateData {
  name: string
  lastName?: string
  email: string
  role: UserRole
}

export interface CreateBody {
  name: string
  lastName?: string
  email: string
  role: UserRole
}

export interface UpdateData {
  name?: string
  lastName?: string
  email?: string
  role?: UserRole
}

export interface UpdateBody {
  name?: string
  lastName?: string
  email?: string
  role?: UserRole
}

export interface UpdateResponse {
  name?: string
  lastName?: string
  email?: string
  role?: UserRole
  updatedAt: string
}
