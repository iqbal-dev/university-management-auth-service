import { IUser } from './user.interface'

const createUser = async (user: IUser): Promise<IUser | undefined> => {
  try {
    return user
  } catch (error) {
    return undefined
  }
}

export default {
  createUser,
}
