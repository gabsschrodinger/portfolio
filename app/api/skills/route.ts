import skills from "./skillList.json"

export async function GET(): Promise<Response> {
  return Response.json({
    data: skills,
  });
}
