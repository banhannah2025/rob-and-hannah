import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 });
  }
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages,
    }),
  });

  const data = await response.json();
  const message = data.choices[0]?.message || { role: 'assistant', content: '' };
  return NextResponse.json(message);
}
