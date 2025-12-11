# SmileCare Dental Assistant

AI assistant for a dental clinic that works both as a **voice assistant** (Retell) and as a **chat assistant** (web widget / chat UI).  
It talks to patients, answers questions and sends structured data into an automation workflow (n8n).

## ✨ Features

- Voice assistant (phone/web call via Retell)
- Chat assistant (web chat widget / API)
- Dental-specific conversation flow (check-ups, pain, emergencies, hygiene, cancellations)
- Collects patient data:
  - name and contact details
  - reason for call/visit
  - preferred date and time
- Sends structured JSON payloads to n8n via webhook
- n8n workflow can:
  - create / update appointments in calendar or PMS
  - send notification emails/Slack messages to the clinic
  - log leads / patients to CRM

## 🏗 Architecture (High Level)

```text
Caller / Web User
        ↓
Retell Voice + Chat Agent
        ↓ (tool / webhook call)
     n8n Workflow
        ↓
 Calendar / CRM / Email / PMS
```

## 🧰 Tech Stack

- **Retell Voice AI** – voice + chat interface, LLM orchestration
- **n8n** – workflow engine (webhook trigger, calendar/CRM/email integrations)
- **LLM provider** – e.g. OpenAI (configured inside Retell)
- Optional: Google Calendar / Outlook, Notion, Airtable, Slack/Email
