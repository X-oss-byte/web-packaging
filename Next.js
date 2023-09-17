export default function handler(req, res) {
  res.status(200).end('Hello Cron!');
}

add cron jobs to <vercel json>
{
  "crons": [{
    "path": "/api/cron",
    "schedule": "0 10 * * *"
  }]
}
