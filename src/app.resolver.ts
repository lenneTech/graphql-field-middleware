import { Args, Query, Resolver } from '@nestjs/graphql';
import { Input } from './app.input';
@Resolver()
export class AppResolver {
  @Query(() => String, { description: 'String to lower case' })
  async getLowerCase(@Args('input') input: Input) {
    return input.str;
  }
}
