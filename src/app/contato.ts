import { TipoContato } from './tipo-contato.enum';

export class Contato {
    private nome: string;
    private telefone: string;
    private email: string;
    private aniversario: Date;
    private tipo: TipoContato;

    constructor(nome: string, telefone: string, email: string, aniversario: Date, tipo: TipoContato) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.aniversario = aniversario;
        this.tipo = tipo;
    }

    // Métodos Getters e Setters
    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getTelefone(): string {
        return this.telefone;
    }

    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getAniversario(): Date {
        return this.aniversario;
    }

    setAniversario(aniversario: Date): void {
        this.aniversario = aniversario;
    }

    getTipo(): TipoContato {
        return this.tipo;
    }

    setTipo(tipo: TipoContato): void {
        this.tipo = tipo;
    }
}
