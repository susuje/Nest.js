import { Controller } from '@nestjs/common'
import { BoardsService } from './boards.service'

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  //private를 붙이면 클래스 내부에서만 사용가능하다.
  //접근 제한자를 생성자(constructor) 파라미터에 선언하면 접근제한자가 사용된 생성자 파라미터는 클래스 프로퍼티로 선언됨
}
