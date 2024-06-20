CREATE TABLE app_users (
    user_uid UUID NOT NULL PRIMARY KEY,
    user_first_name VARCHAR(50) NOT NULL,
    user_last_name VARCHAR(50) NOT NULL,
    user_display_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(100) NOT NULL,
    user_password VARCHAR(50) NOT NULL, 

);
