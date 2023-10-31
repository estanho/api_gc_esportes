-- CreateTable
CREATE TABLE "esportes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "esportes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cidades" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "cidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ativo" BOOLEAN DEFAULT true,
    "id_usuario" INTEGER NOT NULL,
    "id_esporte" INTEGER NOT NULL,
    "id_campeonato" INTEGER NOT NULL,

    CONSTRAINT "equipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "data_inicio_inscricao" TIMESTAMP(3) NOT NULL,
    "data_final_inscricao" TIMESTAMP(3) NOT NULL,
    "data_horario_inicio" TIMESTAMP(3) NOT NULL,
    "total_atletas_equipe" INTEGER NOT NULL,
    "total_equipes" INTEGER NOT NULL,
    "ativo" BOOLEAN DEFAULT true,
    "id_usuario" INTEGER NOT NULL,
    "id_cidade" INTEGER NOT NULL,
    "id_esporte" INTEGER NOT NULL,

    CONSTRAINT "campeonatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "id_google" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resultados" (
    "id" SERIAL NOT NULL,
    "posicao" INTEGER NOT NULL,
    "id_equipe" INTEGER NOT NULL,
    "id_campeonato" INTEGER NOT NULL,

    CONSTRAINT "resultados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EquipeToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_EquipeToUsuario_AB_unique" ON "_EquipeToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_EquipeToUsuario_B_index" ON "_EquipeToUsuario"("B");

-- AddForeignKey
ALTER TABLE "equipes" ADD CONSTRAINT "equipes_id_esporte_fkey" FOREIGN KEY ("id_esporte") REFERENCES "esportes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipes" ADD CONSTRAINT "equipes_id_campeonato_fkey" FOREIGN KEY ("id_campeonato") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos" ADD CONSTRAINT "campeonatos_id_cidade_fkey" FOREIGN KEY ("id_cidade") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos" ADD CONSTRAINT "campeonatos_id_esporte_fkey" FOREIGN KEY ("id_esporte") REFERENCES "esportes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resultados" ADD CONSTRAINT "resultados_id_equipe_fkey" FOREIGN KEY ("id_equipe") REFERENCES "equipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resultados" ADD CONSTRAINT "resultados_id_campeonato_fkey" FOREIGN KEY ("id_campeonato") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipeToUsuario" ADD CONSTRAINT "_EquipeToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "equipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipeToUsuario" ADD CONSTRAINT "_EquipeToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
