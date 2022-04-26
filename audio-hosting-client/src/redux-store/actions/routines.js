import { createRoutine } from "../../utils/createRoutine"

import { LOGIN, REGISTER } from "./types"

export const loginRoutine = createRoutine(LOGIN)
export const registerRoutine = createRoutine(REGISTER)