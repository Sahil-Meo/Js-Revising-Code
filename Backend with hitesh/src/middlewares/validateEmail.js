import { ApiError } from '../utils/ApiError.js';
import emailValidator from '../utils/emailValidator.js'

export default async function requareValidateEmail(req, res, next) {
     try {

          const { email } = req.body;
          const { valid, reason, normalized } = emailValidator(email);
          if (!valid) {
               return res.status(400).json({ error: reason });
          }
          req.body.email = normalized;
          next();
     } catch (error) {
          // console.log("error occure while validating email:", error.message);
          return res.status(500).json(new ApiError(500, "Something went wrong while validating email"));
     }
}