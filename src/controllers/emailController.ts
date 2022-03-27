//Mailtrap (SMTP Fake): https://mailtrap.io/inboxes/1678560/messages

import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

export const contato = async (req: Request, res: Response) => {
   //Configurar transporter (servidor SMTP)
   //Para o exemplo será utilizado um servidor SMTP fake "mailtrap"
   let transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
         user: "d0d6a7df9981a5",
         pass: "a139fb1bfbd30b"
      }
   });

   //Configurar a mensagem
   let message = {
      from: 'nao-responda@gmail.com',
      to: 'snor.gabriel@gmail.com',
      replyTo: req.body.from,
      subject: req.body.subject,
      html: req.body.txt,
      text: req.body.txt
   }

   //Enviar a mensagem
   let info = await transport.sendMail(message);
   console.log("INFO", info);

   res.json({success: true})
}