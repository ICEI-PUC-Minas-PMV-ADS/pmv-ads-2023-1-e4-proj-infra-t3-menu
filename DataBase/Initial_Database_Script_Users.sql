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