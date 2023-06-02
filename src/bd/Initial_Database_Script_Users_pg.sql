create TABLE users  (
   User_Id serial,
   Name varchar(100) NOT NULL,
   Surname varchar(80) NOT NULL,
   Email varchar(120) NOT NULL,
   Password varchar(80) NOT NULL
)
ALTER TABLE users ADD CONSTRAINT PK_Usuarios PRIMARY KEY (User_Id);

select * from users

ALTER TABLE users ADD Perfil INT

update users set Perfil=3 where Perfil is null

ALTER TABLE users alter column Perfil set Not Null

ALTER TABLE users
ADD CONSTRAINT CK_PerfilUsuario CHECK (Perfil IN (1, 2, 3))