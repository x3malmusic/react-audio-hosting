import { 
  MAIN_PAGE,
 } from "../../routes/pathnames"

export const isMiniPlayer = (pathname) => {
  if (pathname !== MAIN_PAGE) return true
}