import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await resend.emails.send({
    from: 'site@cdkol.live',
    to: ['srijit@codeday.org', 'ramiz@codeday.org'],
    subject: `[Received from Site] : ${req.body.subject}`,
    text: `Message from ${req.body.userEmail}\n` + req.body.message,
    html: `<p>Message from ${req.body.userEmail}</p>
    <p>${req.body.message}</p>`
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
