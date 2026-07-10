export default async function handler(request, response) {
  const targetUrl = process.env.WEB_APP_URL;
  if (!targetUrl) {
    return response.status(500).json({ error: "Environment variable WEB_APP_URL belum diatur di Vercel." });
  }
  try {
    const googleResponse = await fetch(targetUrl);
    if (!googleResponse.ok) {
      return response.status(googleResponse.status).json({ error: "Gagal mengambil data dari Google Server" });
    }
    const data = await googleResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
