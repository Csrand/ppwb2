import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { user } from './user.entity';
import { userService } from './user.service';

@Controller('users')
export class userController {
  constructor(private readonly userService: userService) {}

  @Get()
  listarTodos() {
    return this.userService.findAll();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    const user = this.userService.findOne(idNum);
    if (!user) {
      return { mensagem: 'Usuário não encontrado' };
    }
    return user;
  }

  @Post()
  criar(@Body() corpo: Omit<user, 'id'>) {
    return this.userService.create(corpo);
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() novosDados: Partial<user>) {
    const idNum = parseInt(id, 10);
    const resultado = this.userService.update(idNum, novosDados);
    if (!resultado) {
      return { mensagem: 'Usuário não encontrado para atualizar' };
    }
    return { mensagem: 'Atualizado', user: resultado };
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    const foiDeletado = this.userService.remove(idNum);
    if (!foiDeletado) {
      return { mensagem: 'Usuário não encontrado' };
    }
    return { mensagem: 'Usuário deletado com sucesso' };
  }
}
