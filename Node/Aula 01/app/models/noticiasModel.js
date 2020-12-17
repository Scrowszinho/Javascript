module.exports = function(){
    this.getNoticias = (connection, callback) =>{
        connection.query('select * from noticias', callback);
    };
    this.getNoticia = (connection, callback) =>{
        connection.query('select * from noticias where id_noti = 1', callback);
    };

    this.salvarNoticia = (noticias,connection, callback) =>{
        connection.query('insert into noticias set ? ',noticias,callback);
    };

    return this;
}