import { Field, InputType } from '@nestjs/graphql';
import { toLowerCase } from './to-lower-case.middleware';

@InputType({
  description:
    'Simple input with string property converted to lowercase letters',
})
export class Input {
  @Field({
    description: 'Any string with upper and lower case letters',
    nullable: false,
    middleware: [toLowerCase],
  })
  str?: string = undefined;
}
