import { rest } from "msw";

const handlers = [
  rest.get(process.env.NEXT_APP_API_BASE_URL, (_req, res, ctx) =>
    res(ctx.json({}))
  ),
];

export { handlers };
