import { Pipe, PipeTransform, Type } from '@angular/core';

@Pipe({ name: 'asComponent', standalone: true })
export class AsComponentPipe implements PipeTransform {
  transform(value: unknown): Type<unknown> {
    return value as Type<unknown>;
  }
}
