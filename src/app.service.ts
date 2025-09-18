// app.service.ts
import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
}

export interface HealthStatus {
  status: string;
  timestamp: string;
}

@Injectable()
export class AppService {
  getUsers(): User[] {
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
  }

  getHealth(): HealthStatus {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  getHello(): string {
    return 'Hello World!';
  }
}
