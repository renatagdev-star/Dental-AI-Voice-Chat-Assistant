// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const RETELL_API_KEY 
const RETELL_AGENT_ID 

export async function POST(req: NextRequest) {
  try {
    const { message, chatId } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }

    if (!RETELL_API_KEY) {
      console.error("RETELL_API_KEY missing");
      return NextResponse.json(
        { error: "Server is not configured with RETELL_API_KEY" },
        { status: 500 }
      );
    }

    let currentChatId: string | undefined = chatId;

    if (!currentChatId) {
      const createChatRes = await fetch(
        "https://api.retellai.com/create-chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RETELL_API_KEY}`,
          },
          body: JSON.stringify({
            agent_id: RETELL_AGENT_ID,
          }),
        }
      );

      if (!createChatRes.ok) {
        const text = await createChatRes.text();
        console.error("Retell create-chat error:", createChatRes.status, text);
        return NextResponse.json(
          { error: "Failed to start chat session" },
          { status: 500 }
        );
      }

      const chatJson = await createChatRes.json();
      currentChatId = chatJson.chat_id;
    }

    const completionRes = await fetch(
      "https://api.retellai.com/create-chat-completion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RETELL_API_KEY}`,
        },
        body: JSON.stringify({
          chat_id: currentChatId,
          content: message,
        }),
      }
    );

    if (!completionRes.ok) {
      const text = await completionRes.text();
      console.error("Retell completion error:", completionRes.status, text);
      return NextResponse.json(
        { error: "Failed to get reply from assistant" },
        { status: 500 }
      );
    }

    const completionJson = await completionRes.json();
    const messages = completionJson.messages as {
      role: string;
      content: string;
    }[];

    const agentMessage =
      messages?.filter((m) => m.role === "agent").at(-1) ??
      messages?.[messages.length - 1];

    const reply =
      agentMessage?.content ?? "Sorry, I couldn't generate a reply.";

    return NextResponse.json({
      reply,
      chatId: currentChatId,
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
