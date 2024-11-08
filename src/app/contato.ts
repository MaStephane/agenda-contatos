export enum TipoContato {
  Amigo = 'Amigo',
  Familia = 'Família',
  Trabalho = 'Trabalho',
}

export class Contato {
  constructor(
    public nome: string,
    public telefone: string,
    public email: string,
    public aniversario: Date,
    public tipo: TipoContato,
    public favorito: boolean = false
  ) {}

  getNome(): string {
    return this.nome;
  }

  getTelefone(): string {
    return this.telefone;
  }

  getEmail(): string {
    return this.email;
  }

  getAniversario(): Date {
    return this.aniversario;
  }

  getTipo(): TipoContato {
    return this.tipo;
  }

  getFavorito(): boolean {
    return this.favorito;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setAniversario(aniversario: Date): void {
    this.aniversario = aniversario;
  }

  setTipo(tipo: TipoContato): void {
    this.tipo = tipo;
  }

  setFavorito(favorito: boolean): void {
    this.favorito = favorito;
  }
}
