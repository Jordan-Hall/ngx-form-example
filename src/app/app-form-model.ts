import { IsString, Length, IsNotEmpty, IsDate } from 'class-validator';
import {
  dynamicForm,
  TextField,
  hint,
  displayName,
  Textareafield,
  DateField,
  FormGenModel
} from '@libertyware/ngx-form-core';
import { plainToClassFromExist } from 'class-transformer';

export class Personal extends FormGenModel {
  @IsString()
  @Length(1, 22)
  @IsNotEmpty()
  @TextField()
  @hint('Please enter you first Name')
  @displayName('First Name')
  firstName: string;

  @Textareafield()
  @IsString()
  @Length(1, 155)
  comment: string;

  @IsDate()
  @displayName('Date Of Birth')
  @IsNotEmpty()
  @DateField()
  dateOfBirth: Date;
}
