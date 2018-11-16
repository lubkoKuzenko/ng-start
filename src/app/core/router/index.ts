import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterSerializer } from './router-state-serializer';

export const routerSerializer = [
  {
    provide: RouterStateSerializer,
    useClass: RouterSerializer
  }
];
