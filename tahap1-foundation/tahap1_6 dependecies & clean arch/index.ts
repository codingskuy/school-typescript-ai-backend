import { buatUser, sapaUser } from "./domain/user_use_case.service.js"
import { kali } from "./utils/math.js"

const user = buatUser("Rois", 28)
console.log(sapaUser(user))
console.log("2 * 5 =", kali(2, 5))