import { BadRequestError } from "../helpers/api-errors";
import { PARAM_TYPE_ERROR } from "../helpers/constants/http-codes";

export function validateIdNumber(id:any) {
  if (isNaN(+id)) {
    throw new BadRequestError(PARAM_TYPE_ERROR.replace("%PARAM%", id));
  }else return
}
