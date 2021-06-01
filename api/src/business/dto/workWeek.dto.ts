import { ApiProperty } from '@nestjs/swagger';
import { WorkDayStatus } from '../business.constants';

class WorkInterval {
  @ApiProperty()
  open: string;
  @ApiProperty()
  close: string;
}

class WorkDayDTO {
  @ApiProperty({ enum: WorkDayStatus })
  status: WorkDayStatus;
  @ApiProperty({ type: [WorkInterval] })
  hours: WorkInterval[];
}

export class WorkWeekDTO {
  @ApiProperty({ type: WorkDayDTO })
  mon: WorkDayDTO;
  @ApiProperty({ type: WorkDayDTO })
  tue: WorkDayDTO;
  @ApiProperty({ type: WorkDayDTO })
  wed: WorkDayDTO;
  @ApiProperty({ type: WorkDayDTO })
  thr: WorkDayDTO;
  @ApiProperty({ type: WorkDayDTO })
  fri: WorkDayDTO;
  @ApiProperty({ type: WorkDayDTO })
  sat: WorkDayDTO;
  @ApiProperty({ type: WorkDayDTO })
  sun: WorkDayDTO;
}
