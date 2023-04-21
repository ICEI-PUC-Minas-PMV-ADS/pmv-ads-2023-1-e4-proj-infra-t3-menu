create DATABASE users

use users

create TABLE users  (
   [User_Id] [int] IDENTITY(1,1) NOT NULL,
   [Name] [varchar](100) NOT NULL,
   [Surname] [varchar](80) NOT NULL,
   [Email] [varchar](120) NOT NULL,
   [Password] [varchar](80) NOT NULL
CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED ([User_Id] ASC)
)
select * from users

ALTER TABLE [dbo].[users] ADD Perfil INT

update users set Perfil=3 where Perfil is null

ALTER TABLE [dbo].[users] alter column Perfil INT Not Null

ALTER TABLE [dbo].[users]
ADD CONSTRAINT CK_PerfilUsuario CHECK (Perfil IN (1, 2, 3))