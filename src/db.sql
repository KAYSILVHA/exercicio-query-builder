Create database usuarios_query_builder;

create table usuarios(
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  senhs TEXT NOT NULL
);