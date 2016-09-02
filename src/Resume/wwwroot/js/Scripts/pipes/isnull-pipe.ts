import {Pipe, PipeTransform} from "angular2/core";

@Pipe({ name: "isNull" })
export class IsNullPipe implements PipeTransform {
    transform(value: string, isNullValue: any): string {
        return value || isNullValue;
    }
}
