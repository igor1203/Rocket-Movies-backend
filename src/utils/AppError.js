<<<<<<< HEAD
class AppError {
  message;
  statusCode;

  constructor(message, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode;
  }
}

=======
class AppError {
  message;
  statusCode;

  constructor(message, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode;
  }
}

>>>>>>> 3125b3a91bf4b598579f28cd797620bb6e8e6d4a
module.exports = AppError;