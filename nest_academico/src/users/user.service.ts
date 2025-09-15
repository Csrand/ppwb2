import { Injectable } from '@nestjs/common';
import { user } from './user.entity';

@Injectable()
export class userService {
  // Lista simulando um banco em memória
  private users: user[] = [
    { id: 1, name: 'Ana', email: 'ana@exemplo.com' },
    { id: 2, name: 'João', email: 'joao@exemplo.com' },
  ];

  // Retorna todos os usuários
  findAll(): user[] {
    return this.users;
  }

  // Retorna um usuário pelo ID
  findOne(id: number): user | undefined {
    return this.users.find((user) => user.id === id);
  }

  // Cria um newUserw usuário
  create(user: Omit<user, 'id'>): user {
    const newUserw = {
      id: Math.max(...this.users.map(u => u.id)) + 1,
      ...user,
    };
    this.users.push(newUserw);
    return newUserw;
  }

  // Atualiza um usuário
  update(id: number, userAtualizado: Partial<user>): user | null {
    const index = this.users.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.users[index] = { ...this.users[index], ...userAtualizado };
      return this.users[index];
    }
    return null; // não encontrado
  }

  // Remove um usuário
  remove(id: number): boolean {
    const tamanhoAntigo = this.users.length;
    this.users = this.users.filter((u) => u.id !== id);
    return this.users.length < tamanhoAntigo; // true se deletou
  }
}
