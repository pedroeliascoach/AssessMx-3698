import { z } from "zod";
import { ORPCError } from "@orpc/server";
import { base } from "../__core/app";
import { db } from "../database";
import { requests as requestsTable } from "../database/schema";

export const requests = {
  create: base
    .input(
      z.object({
        name: z.string().trim().min(2).max(120),
        email: z.string().trim().email().max(254),
        organization: z.string().trim().max(160).optional(),
        service: z.enum([
          "Certificación de competencias",
          "Formación a la medida",
          "Desarrollo organizacional",
          "Coaching ejecutivo y de equipos",
          "Herramientas digitales",
          "Quiero orientación",
        ]),
        message: z.string().trim().min(10).max(3000),
        consent: z.literal(true),
        website: z.string().max(200).optional(),
      }),
    )
    .handler(async ({ input }) => {
      if (input.website) throw new ORPCError("BAD_REQUEST", { message: "Solicitud inválida." });
      const id = crypto.randomUUID();
      await db
        .insert(requestsTable)
        .values({
          id,
          name: input.name,
          email: input.email,
          organization: input.organization || null,
          service: input.service,
          message: input.message,
          consent: input.consent,
        });
      return { reference: id.slice(0, 8).toUpperCase(), saved: true };
    }),
};
