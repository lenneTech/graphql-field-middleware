import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

/**
 * Field middleware to convert string to lowercase letters
 */
export const toLowerCase: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  console.log('FieldMiddleware toLowerCase');
  const value = await next();
  console.log('value:', value);
  return value?.toLowerCase();
};
