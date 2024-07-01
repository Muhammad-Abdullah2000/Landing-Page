import { Router } from 'express';
import { sendMail } from '../controller/userController.js'
const router = Router();


router.route('/sendmail').post(sendMail);

router.route('/contactMail').post(sendMail);


export default router;