import { Injectable } from '@nestjs/common';
import { FormatterService } from 'src/formatter/formatter.service';

@Injectable()
export class LoggerService {
  constructor(private readonly formatterService: FormatterService) {}

  log(message: string): string {
    const formattedMessage = this.formatterService.formatMessage(message);
    console.log(formattedMessage);
    return formattedMessage;
  }
}
