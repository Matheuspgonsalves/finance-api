import Joi from "joi";

export const expenseSchema = Joi.object({
  amount: Joi.number().positive().required().messages({
    "number.base": "Amount must be a number",
    "number.positive": "Amount must be greater than zero",
    "any.required": "Amount is required",
  }),
  description: Joi.string().max(200).required().messages({
    "string.base": "Description must be a text",
    "string.max": "Description must have at most 200 characters",
    "any.required": "Description is required"
  }),
  date: Joi.date().iso().required().messages({
    "date.base": "Date must be a valid date",
    "date.format": "Date must be in ISO format (e.g. 2026-10-08 or 2026-10-08T12:00:00.000Z)",
    "any.required": "Date is required",
  }),
});