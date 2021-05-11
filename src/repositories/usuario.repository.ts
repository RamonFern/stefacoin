import Usuario from '../entities/usuario.entity';
import { Tables } from '../utils/tables.enum';
import Repository from './repository';

class UsuarioRepository extends Repository<Usuario> {
  constructor() {
    super(Tables.USUARIO);
  }

  async incluir(usuario: Usuario){
    return super.incluir(usuario);
  }
 
}

export default new UsuarioRepository();
